

import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'


dotenv.config({ path: './.env' });


const app = express()

app.use(cors({
    origin: 'process.env.CORS_ORIGIN', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
  }));
  


  app.use(cookieParser());

app.use(urlencoded({extended: true , limit : "14kb"}))
app.use(express.json())
app.use(express.static("public"))


import authRouter from './routes/authRoutes.js'
import fileRouter from './routes/fileRoutes.js'

app.use('/auth' , authRouter)
app.use('/admin', fileRouter)


  
  


export {app}