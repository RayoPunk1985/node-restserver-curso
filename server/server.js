require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/Usuarios', function(req, res) {
    res.json('Get Usuarios');
});

app.post('/Usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es nesesario'

        });
    } else {
        res.json({
            persona: body
        });
    }


});

app.put('/Usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({ id });
});

app.delete('/Usuario', function(req, res) {
    res.json('Delete Usuarios');
});
app.listen(process.env.PORT, () => {
    console.log('escuchando puerto:', process.env.PORT);
});