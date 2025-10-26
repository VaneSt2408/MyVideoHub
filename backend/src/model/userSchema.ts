import mongoose, { Schema, Document, Model } from 'mongoose'; //importamos mongoose para manejar la conexión a la base de datos

export interface IUser extends Document { //creamos una interfaz para el modelo de usuario
    name?: string; //nombre del usuario
    email : string; //email del usuario
    password: string; //contraseña del usuario
    token?: string; //token del usuario
    uploadCount: number; //cantidad de videos subidos por el usuario
    downloadCount: number; //cantidad de videos descargados por el usuario
    createdAt: Date; //fecha de creación del usuario
    updatedAt: Date; //fecha de actualización del usuario
}

const userSchema = new Schema ({ //creamos un nuevo esquema para el modelo de usuario
    name: {type: String}, //nombre del usuario
    email: {type: String, required: true, unique: true}, // email del usuario
    password: {type: String, required: true}, // contraseña del usuario
    token: {type: String}, // token del usuario
    uploadCount: {type: Number, default: 0}, // cantidad de videos subidos por el usuario
    downloadCount: {type: Number, default: 0}, // cantidad de videos descargados por el usuario

},
    {timestamps: true} //creamos un nuevo esquema para el modelo de usuario
) //creamos un nuevo esquema para el modelo de usuario

const User : Model<IUser> = mongoose.model <IUser>("User",userSchema); //creamos un nuevo modelo para el usuario
export default User; //exportamos el modelo para el usuario