import jwt from 'jsonwebtoken'

const validarJWT = (req, res, next) => {
    //Leer el Token
    const token = req.header('x-token');

    if(!token){
        const error = new Error("No hay token en la peticion");
        return res.status(401).json({  msg: error.message     })

        
    }

    try {
        const { _id } = jwt.verify(token, process.env.TOKEN_SECRET)
        req._id = _id

        next();
    } catch (error) {
        return res.status(401).json({  msg: 'Token no valido' })
    }
}

export {
    validarJWT
}