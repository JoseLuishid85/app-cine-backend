import Pelicula from "../models/Pelicula.js";

const listaPeliculas = async (req,res) =>{

    const peliculas = await Pelicula.find();
                                     //.populate('titulo');
    res.json(
        peliculas
    ); 
    
};

const crearPelicula = async (req,res) =>{

    try {
        const pelicula = new Pelicula(req.body)
        const peliculaAlmacenado = await pelicula.save()

        res.json(peliculaAlmacenado)

    } catch (error) {
        console.log(error)
    }
    
};

const actualizarPelicula = async (req,res) =>{

    const id = req.params.id;

    try {
        
        const pelicula = await Pelicula.findById(id);
        
        if( !pelicula ){
            return res.status(404).json({
                ok:true,
                msg: 'Pelicula no encontradoo por id',
            });
        }

        const cambiosPeliculas = req.body

        const peliculaActualizada = await Pelicula.findByIdAndUpdate( id, cambiosPeliculas, { new:true } );

        res.json( peliculaActualizada )

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al procesar datos'
        });
    }
    
};

const eliminarPelicula = async (req,res) =>{

    const id = req.params.id;

    try {
        const pelicula = await Pelicula.findById(id);
        
        if( !pelicula ){
            return res.status(404).json({
                ok:true,
                msg: 'Pelicula no encontradoo por id',
            });
        }

        await Pelicula.findByIdAndDelete(id);

        res.json({
            msg: 'La Pelicula fue Eliminado'
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al procesar datos'
        });
    }

    res.json(id)
}





export {
    listaPeliculas,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
}
