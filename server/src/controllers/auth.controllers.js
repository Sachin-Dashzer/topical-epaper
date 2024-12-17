
import { User } from "../models/users.model.js";
import { asyncHandler } from '../utils/asyncHandler.js'


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

    return res.send(
        res.send({
            success: true,
            massage: "User registered Successfully"
        })
    );
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
        .send(
            {
                success: true,
                massage: "User logged In Successfully",
                data: loggedInUser,
                accessToken,
        
            }
        )

});