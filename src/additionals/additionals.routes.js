import {Router} from 'express'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
import { add, deleted, find, test, update } from './additionals.controller.js'

const api = Router()

api.get('/test', test)
api.post('/add', [validateJwt, isAdmin], add)
api.put('/update/:id', [validateJwt, isAdmin], update)
api.get('/find', find)
api.delete('/delete/:id', [validateJwt, isAdmin], deleted)

export default api