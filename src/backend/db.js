const mongoose = require('mongoose');

function conectDb() {
    mongoose.connect('mongodb+srv://jito:GYftuDpysm71mA27@cluster0.os43v.mongodb.net/snake?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'error de conexion:'));
    db.once('open', function () {
        console.log('Conexion a mongo con exito..');
    });

}


module.exports = conectDb
