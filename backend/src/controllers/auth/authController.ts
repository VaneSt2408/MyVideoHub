import { Request, Response, RequestHandler } from 'express'; //importamos express para manejar las peticiones y respuestas
import User from '../../model/userSchema'; //importamos el modelo de usuario

interface RegisterReq extends Request { //interface para la petición de registro
    body: { //body de la petición
        email: string; //email del usuario
        password: string; //contraseña del usuario
    } //body de la petición
} //interface para la petición de registro

export const signUpUser : RequestHandler = async (req, res) => { //función para registrar un usuario
    try {
        const { email, password } = req.body; //desestructuramos el body de la petición
        const existingUser = await User.findOne({ email }); //buscamos un usuario con el email
        if (existingUser) { //si el usuario existe
            //usuario ya existe
        }
        const newUser = await User.create({ email, password }); //creamos un nuevo usuario
        //usuario creado
    } catch (error) {
        console.error('Error al crear el usuario:', error); //imprimimos el error en la consola
        //error al crear el usuario
    }
};