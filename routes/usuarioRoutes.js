import express from 'express'
import { crearUsuario,autenticar } from '../controllers/usuarioController.js';
import { validarJWT } from '../middlewares/validar-jwt.js'

const router = express.Router();

router.post('/', validarJWT ,crearUsuario);
router.post('/login', autenticar);


export default router;