import express from 'express';
import {updateChanelData,getAllChanels} from '../controllers/chanel.js'

import {login} from '../controllers/auth.js'


const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChanelData)
routes.get('/getAllChanels',getAllChanels)

export default routes;