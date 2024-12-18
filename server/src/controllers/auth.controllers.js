
import { User } from "../models/users.model.js";
import { asyncHandler } from '../utils/asyncHandler.js'
import * as jwt from 'jsonwebtoken';


export const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;

    if ([userName, email, password].some((field) => field?.trim() === "")) {
        res.send({
            success: false,
            massage: "All fields are required"
        })
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        res.send({
            success: false,
            massage: "User already exists"
        })
    }

    const user = await User.create({
        userName,
        email,
        password
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
        res.send({
            success: false,
            massage: "Something went wrong while registering the user"
        })
    }

    return res.send({
        success: true,
        massage: "User registered Successfully"
    });

});


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        res.send({
            success: false,
            massage: "email is required"
        })
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.send({
            success: false,
            massage: "User does not exist"
        })
    }

    const isPasswordCorrect = await user.isCorrectPassword(password);

    if (!isPasswordCorrect) {
        res.send({
            success: false,
            massage: "Invalid user credentials"
        })
    }

    const { accessToken } = await user.generateAccessToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
        httpOnly: true,
        secure: false
    };

    return res
        .cookie("accessToken", accessToken, options)
        .json(
            {
                success: true,
                massage: "User logged In Successfully",
                data: loggedInUser,
                accessToken,

            }
        )

});



export const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie('accessToken', { path: '/', httpOnly: true, secure: true }).status(200).send({
        success: true,
        message: "User logged out successfully",
    });
});


export const authMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken;

    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Unauthorized request",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded; 
        next(); 
    } catch (err) {
        return res.status(403).send({
            success: false,
            message: "Invalid or expired access token",
        });
    }
});


export const allUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.send({
        success: true,
        massage: "All Users",
        data: users
    })
})


export const deleteUser = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.send({
            success: false,
            massage: "email is required"
        })
    }

    await User.deleteOne({ email });

    res.send({
        success: true,
        massage: "User deleted successfully"
    })
})








