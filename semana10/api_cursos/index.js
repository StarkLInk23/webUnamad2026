import express from 'express';
import dotenv from 'dotenv';

//Cargar variables de entorno
dotenv.config();

const serverCursos = express();

//middleware
serverCursos.use(express.json());

serverCursos.get('/', (req, res) => {
    res.status(200).json({
        app: process.env.APP_NAME,
        mensaje: 'Bienvenido a la API de cursos'
    });
});

serverCursos.get('/cursos', (req, res) => {
    const cursos = [
        "Node.js",
        "Express",
        "Base de datos"
    ]
    res.status(200).json({
        total: cursos.length,
        cursos
    });
});

//Crear Cursos
serverCursos.post('/cursos', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        mensaje: 'Curso creado exitosamente!',
        curso: req.body
    });
})

//Consultar curso por ID
serverCursos.get('/cursos/:id', (req, res) => {
    const id = req.params;
    res.json({id, nombre: 'Cursos de ejemplo'});
});

const PORT = process.env.PORT;

serverCursos.listen(PORT, () => {
    //console.log('Servidor de cursos cargado exitosamente');
    console.log(`${process.env.APP_NAME} ejecutándose en el puerto ${PORT}`);
});