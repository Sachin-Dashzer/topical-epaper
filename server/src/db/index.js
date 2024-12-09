import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {DB_NAME} from '../constants.js'


dotenv.config({
    path : './.env'
})


const database = async ()=>{
    try{
        const databaseServer = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Database connected successfully ${databaseServer.connection.host}`);
    }
    catch(error){

        console.log(error)
        process.exit(1)
    }
}


export default database