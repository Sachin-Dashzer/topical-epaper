

import express, { urlencoded } from 'express'
import cors from 'cors'

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(urlencoded({extended: true , limit : "14kb"}))
app.use(express.json({limit: "14kb"}))
app.use(express.static("public"))




export {app}