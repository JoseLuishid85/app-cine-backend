import mongoose from "mongoose";

const peliculaSchema = mongoose.Schema(
    {
        titulo:{
            type: String,
            require: true,
            trim: true
        },
        descripcion:{
            type: String,
            require: true,
            trim: true
        }
    },{
        timestamps: true,
    }
); 

const Pelicula = mongoose.model("Pelicula", peliculaSchema);
export default Pelicula;