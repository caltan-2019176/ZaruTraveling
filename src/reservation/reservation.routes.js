import {Router} from 'express'
import { add, test } from './reservation.controller.js'

const api = Router()

api.post('/add', add)
api.get('/test', test)


export default api