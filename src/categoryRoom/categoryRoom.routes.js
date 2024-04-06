'use strict'

import { Router } from "express"
import {validateJwt, isAdmin} from '../middlewares/validate-jwt.js'
import { addCategoryRoom, deleteCategoryRoom, getCategoryRoom, updateCategoryRoom } from "./categoryRoom.controller.js"

const api = Router()
api.post('/addCategory',[validateJwt, isAdmin], addCategoryRoom)
api.get('/getCategory', [validateJwt], getCategoryRoom)
api.put('/updateCategory/:id',[validateJwt, isAdmin], updateCategoryRoom )
api.delete('/deleteCategory/:id',[validateJwt, isAdmin], deleteCategoryRoom)

export default api