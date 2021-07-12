const mongoose = require('mongoose');


// metods
async function getData(model) {
    const data = await model.find({});
    return data;
}

function postData(data){
    data.save(function(err, ranked) {
    if(err) {
        console.log('error en guardar el rank');
    }
    console.log('datos guardados con exito');
    });
}



module.exports = {
    getData: getData,
    postData: postData
}

