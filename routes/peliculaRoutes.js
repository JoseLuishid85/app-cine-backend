import express from 'express'
import { listaPeliculas, crearPelicula, actualizarPelicula, eliminarPelicula } from '../controllers/peliculaController.js'

const router = express.Router();

router.get('/', listaPeliculas);
router.post('/', crearPelicula);
router.put('/:id', actualizarPelicula);
router.delete('/:id', eliminarPelicula);
//router.get('/', crearUsuario);


export default router;