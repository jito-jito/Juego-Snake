const mongoose = require('mongoose');
const { config } = require('../../config/index')

const HOST = config.dbHost
const DB_NAME = config.dbName
const PASSWORD = config.dbPassword
const USER = config.dbUser



function conectDb() {
    mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'error de conexion:'));
    db.once('open', function () {
        console.log('Conexion a mongo con exito..');
    });

}


module.exports = conectDb
