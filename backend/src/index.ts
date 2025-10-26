import express from 'express';//importamos express
const app = express();//creamos una instancia de express
import connectDB from './config/db';

connectDB();
app.listen(process.env.PORT || 3000, () => {//iniciamos el servidor en el puerto 3000
    console.log('El servidor esta corriendo en el puerto 3000');//imprimimos un mensaje en la consola
});//cerramos el servidor