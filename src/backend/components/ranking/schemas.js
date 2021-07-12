const mongoose = require('mongoose');

// schema
const rankingSchema = new mongoose.Schema({
    name: String,
    level: Number,
});

//model
const ranking = mongoose.model('ranking', rankingSchema);


module.exports = ranking
