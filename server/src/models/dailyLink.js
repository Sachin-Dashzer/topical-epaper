import mongoose from "mongoose";

const dailyLink = mongoose.Schema({


    date: {
        type: String,
        required: true,
        default: "6th Jan 2025"
    },
    firstBtn: {
        type: String,
        required: true,
        default: "The Hindu"

    },
    firstLink: {
        type: String,
        required: true,
        default: "#"

    },
    secondBtn: {
        type: String,
        required: true,
        default: "Indian Express"

    },
    secondLink: {
        type: String,
        required: true,
        default: "#"

    },




})


const DailyLInk = mongoose.model("DailyLink", dailyLink)


export default DailyLInk;