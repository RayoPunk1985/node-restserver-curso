require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

<<<<<<< HEAD
=======

>>>>>>> 43b399f... listo todo bien
const app = express();

const bodyParser = require('body-parser');

<<<<<<< HEAD

=======
>>>>>>> 43b399f... listo todo bien
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

<<<<<<< HEAD
app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useUrlParser: true, useCreateIndex: true },

    (err, res) => {
        if (err) throw err;
        console.log('base online');

    });

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto:', process.env.PORT);
=======

// Configuración global de rutas
app.use(require('./routes/index'));



mongoose.connect(process.env.URLDB, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
>>>>>>> 43b399f... listo todo bien
});