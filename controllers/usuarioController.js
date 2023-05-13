import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const crearUsuario = async (req,res) =>{
    //Evitar Registro Duplicado
    const { email } = req.body ;
    const existeUsuario = await Usuario.findOne({email})

    if(existeUsuario){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message })
    }
    try {
        const usuario = new Usuario(req.body)
        const usuarioAlmacenado = await usuario.save()

        res.json(usuarioAlmacenado)

    } catch (error) {
        console.log(error)
    }
    
};

const autenticar = async (req,res) =>{
    const { email, password } = req.body;
    //Comprobar si el correo existe
    const usuario = await Usuario.findOne({email})
    if(!usuario){
        const error = new Error("Usuario no Existe");
        return res.status(400).json({ msg: error.message })
    }

    //Comprobar su password
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
        })
        }else{
            const error = new Error("El password es incorrecto");
            return res.status(400).json({ msg: error.message })
    }
}; 

export {
    crearUsuario,
    autenticar
}