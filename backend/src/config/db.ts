import dotenv from 'dotenv'; //importamos dotenv para manejar las variables de entorno
import mongoose from 'mongoose'; //importamos mongoose para manejar la conexión a la base de datos

dotenv.config(); //configuramos dotenv para manejar las variables de entorno

const connectDB = async () => { try { //creamos una función asíncrona para conectar a la base de datos
    const db =await mongoose.connect(process.env.MONGO_URI as string); //conectamos a la base de datos
    console.log('Connected to MongoDB'); //imprimimos un mensaje en la consola
} catch (error) { //si ocurre un error, imprimimos un mensaje en la consola
    console.error('Error connecting to MongoDB:', error); //imprimimos el error en la consola
    process.exit(1); //salimos del proceso con un código de error
}
}; //exportamos la función para conectar a la base de datos

export default connectDB; //exportamos la función para conectar a la base de datos