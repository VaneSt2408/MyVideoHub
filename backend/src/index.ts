import express from 'express';//importamos express
const app = express();//creamos una instancia de express
import connectDB from './config/db';

connectDB();
const port = process.env.PORT || 3000;
app.listen(port, () => {//iniciamos el servidor en el puerto 3000
    console.log('El servidor esta corriendo en el puerto', port);//imprimimos un mensaje en la consola
});//cerramos el servidor