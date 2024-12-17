

import express, { urlencoded } from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies and authentication headers
  }));
  



app.use(urlencoded({extended: true , limit : "14kb"}))
app.use(express.json({limit: "14kb"}))
app.use(express.static("public"))


import authRouter from './routes/authRoutes.js'
app.use('/auth' , authRouter)


  
  


export {app}