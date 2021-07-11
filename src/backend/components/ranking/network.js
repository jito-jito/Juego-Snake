const express = require('express');
const ranking = express.Router();

const { getRanking, postRank } = require('./store')

ranking.get('/', (req, res) => {
    getRanking()
        .then((data) => {
            res.json(data);
            res.end()
        })
        .catch((err) => {
            console.log('error en obtener ranking' + err)
        })
})

ranking.post('/', (req, res) => {
    let rank = req.body;
    postRank(rank);
    res.status(201).send();
})


module.exports = ranking
