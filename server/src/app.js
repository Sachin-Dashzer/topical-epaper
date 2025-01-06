

import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express()

app.use(cors({
    // origin: 'https://pscupdates.com', 
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
  }));
  


  app.use(cookieParser());

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(express.static("public"))


import authRouter from './routes/authRoutes.js'
import fileRouter from './routes/fileRoutes.js'

app.use('/auth' , authRouter)
app.use('/admin', fileRouter)


  
  


export {app}
