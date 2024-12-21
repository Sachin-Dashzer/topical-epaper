
import { User } from "../models/users.model.js";
import { asyncHandler } from '../utils/asyncHandler.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';


export const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;

    if ([userName, email, password].some((field) => field?.trim() === "")) {
        return res.send({
            success: false,
            massage: "All fields are required"
        })
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        return res.send({
            success: false,
            massage: "User already exists"
        })
    }

    const hashPassword = await bcrypt.hash(password, 12);


    const newUser = new User({
        userName,
        email,
        password: hashPassword,
    });

    await newUser.save();

    // const createdUser = await User.findById(user._id).select("-password");

    // if (!createdUser) {
    //     return res.send({
    //         success: false,
    //         massage: "Something went wrong while registering the user"
    //     })
    // }

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

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        res.send({
            success: false,
            massage: "Invalid user credentials"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            userName: user.userName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
        success: true,
        message: "Logged in successfully",
        user: {
            email: user.email,
            id: user._id,
            userName: user.userName,
        },
    });

});







export const logoutUser = (req, res) => {
    res.clearCookie("token").json({
        success: true,
        message: "Logged out successfully!",
    });
};

//auth middleware
export const authMiddleware = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized user!",
        });
    }

    try {
        const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized user!",
        });
    }
};

export const allUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.send({
        success: true,
        massage: "All Users",
        data: users
    })
})


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const newuser = await User.findByIdAndDelete(id);

        if (!newuser) {
            return res.status(404).json({
                success: false,
                message: "user not found",
                id
            });
        }

        res.status(200).json({
            success: true,
            message: "user deleted successfully",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
};



export const updatePassword = asyncHandler(async (req, res) => {

    const { id, password } = req.body;

    if (password === "") {
        return res.send({
            success: false,
            message: "Password is required"
        })
    }

    const findUser = await User.findOne({ _id: id });

    if (!findUser) {
        return res.send({
            success: false,
            message: "User not found"
        })
    }


    const hashPassword = await bcrypt.hash(password, 12);



    findUser.password = hashPassword;
    await findUser.save({ validateBeforeSave: false })

    res.send({
        success: true,
        message: "Password updated successfully",
        findUser
    })

})


