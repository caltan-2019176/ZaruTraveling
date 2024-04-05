'use strict'

//importaciones
import express from 'express'
import morgan from 'morgan'
import { config } from "dotenv"

//Importaciones de routes
import userRoutes from '../src/user/user.routes.js'

//configuraciones
const app = express()
config()
const port = process.env.PORT || 3056

//configuración del servidor 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev')) 

//declaracion de rutas
app.use('/user', userRoutes)

//levantar el servidor 
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}