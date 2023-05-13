import  express  from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js'
import peliculaRoutes from './routes/peliculaRoutes.js'

const app = express();
app.use(express.json())

dotenv.config();

conectarDB();

app.use(cors())

//Routing
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/pelicula', peliculaRoutes);

const PORT = process.env.PORT || 4000;


app.listen(PORT,() =>{
    console.log("Servidor corriendo en el puerto: " + PORT)
})