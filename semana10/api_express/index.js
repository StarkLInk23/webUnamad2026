import express from 'express';

const servidor = express();
servidor.use(express.json());


servidor.get('/', (req, res) => {
    res.status(200).json({
        messa: 'Bienvenidos a la API de express'
    })

    /*res.json({
        message: 'Bienvenido a la API de Express'
    });*/
});

servidor.post('/registro', (req, res) => {
    console.log(req.body)

    res.json({
        message: 'Registro completado exitosamente'
    });
});

servidor.listen(3000, () => {
    console.log('Servidor cargado exitosamente!!')
});