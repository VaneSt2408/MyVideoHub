import express from 'express';//importamos express
const app = express();//creamos una instancia de express
import connectDB from './config/db';
import dotenv from 'dotenv';
import routes from './routes/index';
dotenv.config();
connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());//habilitamos el uso de json en las peticiones
app.use(express.urlencoded({ extended: true }));//habilitamos el uso de urlencoded en las peticiones)
app.use('/api/v1', routes);//usamos las rutas definidas en routes/index.ts
app.listen(port, () => {//iniciamos el servidor en el puerto 3000
    console.log('El servidor esta corriendo en el puerto', port);//imprimimos un mensaje en la consola
});//cerramos el servidor

