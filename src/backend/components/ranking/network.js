const express = require('express');
const ranking = express.Router();

const { getRank, saveRank } = require('./controller')

ranking.get('/', async (req, res) => {
    getRank()
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((err) => {
            console.log('error en obtener ranking' + err)
        })
})

ranking.post('/', (req, res) => {
    let rank = req.body;
    saveRank(rank)
        .then(() => {
            console.log('Datos recibidos')
            res.status(201).send();
        })
        .catch((err) => {
            console.log('error en obtener ranking' + err)
        })

    
})


module.exports = ranking
