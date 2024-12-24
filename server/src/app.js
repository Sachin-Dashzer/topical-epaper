

import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express()

app.use(cors({
    origin: 'https://topical-epaper.vercel.app', 
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