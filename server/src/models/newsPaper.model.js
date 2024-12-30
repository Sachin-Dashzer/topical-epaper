

import mongoose, { Schema} from "mongoose";



const newspaper = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    fileUrl: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    author: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
    }
})


const Newspaper = mongoose.model("Newspaper", newspaper);


export default Newspaper;