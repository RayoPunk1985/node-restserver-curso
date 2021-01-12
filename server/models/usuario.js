const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

<<<<<<< HEAD
let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

let usuarioScrema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre e nesesario']
=======

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};


let Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
>>>>>>> 43b399f... listo todo bien
    },
    email: {
        type: String,
        unique: true,
<<<<<<< HEAD
        require: [true, 'El correo es nesario']
    },
    password: {
        type: String,
        require: [true, 'Es requerdo el password']
    },
    img: {
        type: String,
        require: [false]
=======
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
>>>>>>> 43b399f... listo todo bien
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
<<<<<<< HEAD

=======
>>>>>>> 43b399f... listo todo bien
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
<<<<<<< HEAD
usuarioScrema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

usuarioScrema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });
module.exports = mongoose.model('Usuario', usuarioScrema);
=======


usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });


module.exports = mongoose.model('Usuario', usuarioSchema);
>>>>>>> 43b399f... listo todo bien
