const express = require('express');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../models/usuario');
//const usuario = require('../models/usuario');
const app = express();

app.get('/usuario', function(req, res) {
=======

const bcrypt = require('bcrypt');
const _ = require('underscore');

const Usuario = require('../models/usuario');
const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');

const app = express();


app.get('/usuario', verificaToken, (req, res) => {

>>>>>>> 43b399f... listo todo bien

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({ estado: true }, 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
<<<<<<< HEAD
=======

>>>>>>> 43b399f... listo todo bien
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
<<<<<<< HEAD
=======

>>>>>>> 43b399f... listo todo bien
            Usuario.count({ estado: true }, (err, conteo) => {

                res.json({
                    ok: true,
                    usuarios,
<<<<<<< HEAD
                    cuantos: conteo,
                    err
                });
            })
        })
});

app.post('/usuario', function(req, res) {
=======
                    cuantos: conteo
                });

            });


        });


});

app.post('/usuario', [verificaToken, verificaAdmin_Role], function(req, res) {

>>>>>>> 43b399f... listo todo bien
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

<<<<<<< HEAD
    usuario.save((err, usuarioDB) => {
=======

    usuario.save((err, usuarioDB) => {

>>>>>>> 43b399f... listo todo bien
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });

<<<<<<< HEAD
    });

});

app.put('/Usuario/:id', function(req, res) {
=======

    });


});

app.put('/usuario/:id', [verificaToken, verificaAdmin_Role], function(req, res) {

>>>>>>> 43b399f... listo todo bien
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
<<<<<<< HEAD
=======

>>>>>>> 43b399f... listo todo bien
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }


<<<<<<< HEAD
=======

>>>>>>> 43b399f... listo todo bien
        res.json({
            ok: true,
            usuario: usuarioDB
        });
<<<<<<< HEAD
    })


});

app.delete('/Usuario/:id', function(req, res) {
    let id = req.params.id;
    //Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
=======

    })

});

app.delete('/usuario/:id', [verificaToken, verificaAdmin_Role], function(req, res) {


    let id = req.params.id;

    // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
>>>>>>> 43b399f... listo todo bien

    let cambiaEstado = {
        estado: false
    };

    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
<<<<<<< HEAD
                    message: 'Usuario no encontado'
                }
            });
        };
=======
                    message: 'Usuario no encontrado'
                }
            });
        }

>>>>>>> 43b399f... listo todo bien
        res.json({
            ok: true,
            usuario: usuarioBorrado
        });
<<<<<<< HEAD
    });
=======

    });



>>>>>>> 43b399f... listo todo bien
});



module.exports = app;