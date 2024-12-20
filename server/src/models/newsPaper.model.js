

import mongoose, { Schema} from "mongoose";



const newspaper = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,

    },
    fileUrl: {
        type: String,
    },
    date: {
        type: String,
    }
})


const Newspaper = mongoose.model("Newspaper", newspaper);


export default Newspaper;