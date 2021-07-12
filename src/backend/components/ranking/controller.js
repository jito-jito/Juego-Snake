const { getData, postData } = require('./store')

const rankingModel = require ('./schemas');

async function getRank() {
    const data = await getData(rankingModel)
    const rank = orderData(data)
    return rank;

}

function orderData(arr){
    let newData = [];
    let biglevel;
    let indexBigLevel;

    for(let i=0; i<5; i++) {
        for(let j=0; j < arr.length; j++) {
            if(j == 0) {
                biglevel = arr[j].level;
                indexBigLevel = j;
            }
            else if( arr[j].level > biglevel ) {
                biglevel = arr[j].level;
                indexBigLevel = j;
            }
        }
        newData.push(arr[indexBigLevel]);
        arr.splice(indexBigLevel, 1)
    }

    return(newData)
}




async function saveRank(rank) {
    const data = new rankingModel({
        name: rank.name,
        level: rank.level
    });
    await postData(data)

}


module.exports = {
    getRank: getRank,
    saveRank: saveRank
}
