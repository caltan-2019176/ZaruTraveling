import { Router } from "express"
import { addComment, deleteComment, getComments, updateCommetn } from './comment.controller.js'
import {validateJwt, isClient} from '../middlewares/validate-jwt.js'

const api = Router()

api.post('/addComment', [validateJwt, isClient], addComment)
api.put('/updateComment/:id', [validateJwt, isClient], updateCommetn)
api.delete('/deleteComment/:id',[validateJwt, isClient], deleteComment)
api.get('/getComments', [validateJwt, isClient],getComments)


export default api	