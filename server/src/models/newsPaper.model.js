

import mongoose, { Schema} from "mongoose";



const newspaper = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    description: {
        type: String,

    },
    file: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    author: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
    {
        timestaps: true
    }

)


export const Newspaper = mongoose.model("Newspaper", newspaper);