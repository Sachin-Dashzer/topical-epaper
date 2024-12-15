import mongoose, {schema} from 'mongoose'


const adminSchema = mongoose.schema({


    name : {
        type : String,
        required : true,
        unique : true,

    },
    email : {
        type : String,
        required : true,
        unique : true,

    },

    password : {
        type : String,
        required : true,
    }
    

})


export const Admin = mongoose.model("Admin", adminSchema)