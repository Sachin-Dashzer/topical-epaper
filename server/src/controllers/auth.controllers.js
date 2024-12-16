
import { User } from "../models/users.model";
import { asyncHandler } from '../utils/asyncHandler.js'


export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if ([name, email, password].some((field) => field?.trim() === "")) {
        res.status(303).json({
            success: false,
            massage: "All fields are required"
        })
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        res.status(308).json({
            success: false,
            massage: "User already exists"
        })
    }

    const user = await User.create({
        name,
        email,
        password
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
        res.status(307).json({
            success: false,
            massage: "Something went wrong while registering the user"
        })
    }

    return res.status(201).json(
        res.status(200).json({
            success: true,
            massage: "User registered Successfully"
        })
    );
});


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        res.status(400).json({
            success: false,
            massage: "email is required"
        })
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({
            success: false,
            massage: "User does not exist"
        })
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
        res.status(401).json({
            success: false,
            massage: "Invalid user credentials"
        })
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            {
                success: true,
                massage: "User logged In Successfully",
                data: loggedInUser,
                accessToken,
                refreshToken
            }
        )

});