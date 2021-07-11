const mongoose = require('mongoose');

// schema
const rankingSchema = new mongoose.Schema({
    name: String,
    level: Number,
});

//model
const ranking = mongoose.model('ranking', rankingSchema);

// metods
async function getRank () {
    const data = await ranking.find({});
    return data;
}

function saveRank(rank){
    const ranked = new ranking({
        name: rank.name,
        level: rank.level
    });
    ranked.save(function(err, ranked) {
    if(err) {
        console.log('error en guardar el rank');
    }
    console.log('rank guardado con exito');
    });
}



module.exports = {
    getRanking: getRank,
    postRank: saveRank
}

