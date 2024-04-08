'use strict'

//importaciones
import express from 'express'
import morgan from 'morgan'
import { config } from "dotenv"
import reservationRoutes from '../src/reservation/reservation.routes.js'
import eventRoutes from '../src/event/event.routes.js'
import invoiceRoutes from '../src/invoice/invoice.routes.js'
import additionalsRoutes from '../src/additionals/additionals.routes.js'

//Importaciones de routes


//configuraciones
const app = express()
config()
const port = process.env.PORT || 3056

//configuración del servidor 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev')) 

//declaracion de rutas

app.use('/reservation', reservationRoutes)
app.use('/invoice', invoiceRoutes)
app.use('/event', eventRoutes)
app.use('/additionals', additionalsRoutes)

//levantar el servidor 
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}