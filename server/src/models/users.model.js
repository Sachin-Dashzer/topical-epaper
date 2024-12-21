import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        default: "user"
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})


// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         return next();
//     }
//     this.password = bcrypt.hash(this.password, 12)
//     next()
// })

// userSchema.methods.isCorrectPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// }



userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        })
}



userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        })
}





export const User = mongoose.model("User", userSchema)