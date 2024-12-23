
import { User } from "../models/users.model.js";
import { asyncHandler } from '../utils/asyncHandler.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';


export const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;

    if ([userName, email, password].some((field) => field?.trim() === "")) {
        return res.send({
            success: false,
            massage: "All fields are required !"
        })
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        return res.send({
            success: false,
            massage: "This email already exists !"
        })
    }

    const hashPassword = await bcrypt.hash(password, 12);


    const newUser = new User({
        userName,
        email,
        password: hashPassword,
    });

    await newUser.save();


    return res.send({
        success: true,
        massage: "User Registered Successfully !"
    });

});


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        res.send({
            success: false,
            massage: "Email Id is required !"
        })
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.send({
            success: false,
            massage: "User does not exist. Recheck email !"
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
        massage: "Logged in successfully !",
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
        massage: "User Logged out successfully !",
    });
};



//auth middleware
export const authMiddleware = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.send({
            success: false,
            massage: "Unauthorized user!",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            massage: "Unauthorized user!",
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
            return res.send({
                success: false,
                massage: "User does not found !"
            });
        }

        res.status(200).json({
            success: true,
            massage: "User deleted successfully !",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            massage: "Error occurred",
        });
    }
};



export const updatePassword = asyncHandler(async (req, res) => {

    const { id, password } = req.body;

    if (password === "") {
        return res.send({
            success: false,
            massage: "Password is required !"
        })
    }

    const findUser = await User.findOne({ _id: id });

    if (!findUser) {
        return res.send({
            success: false,
            massage: "User not found !"
        })
    }


    const hashPassword = await bcrypt.hash(password, 12);



    findUser.password = hashPassword;
    await findUser.save({ validateBeforeSave: false })

    res.send({
        success: true,
        massage: "Password updated successfully !",        
    })

})


