<<<<<<< HEAD
//============================
//puerto
//============================
process.env.PORT = process.env.PORT || 3000;

//============================
//Entorno
//============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============================
//Base de Datos
//============================

=======
// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//  Base de datos
// ============================
>>>>>>> 43b399f... listo todo bien
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
<<<<<<< HEAD

} else {
    urlDB = process.env.MONGO_URL;
}

=======
} else {
    urlDB = process.env.MONGO_URI;
}
>>>>>>> 43b399f... listo todo bien
process.env.URLDB = urlDB;