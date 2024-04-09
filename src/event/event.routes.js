import {Router} from 'express'
import { add, deleted, find, test, update } from './event.controller.js'

const api = Router()

api.get('/test', test)
api.post('/add', add)
api.put('/update/:id', update)
api.get('/find', find)
api.delete('/delete/:id', deleted)

export default api