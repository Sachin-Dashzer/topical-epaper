import express from 'express'
import dotenv from 'dotenv'

const app = express();

dotenv.config({
    path : './.env'
})


const PORT = process.env.PORT || 5000


app.use("/" , (req ,res)=>{
    res.json({message : "hello from dashzer"})
})

app.get('/api' , (req , res)=>{

    res.send("jhdkhk")
})



app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`)
})