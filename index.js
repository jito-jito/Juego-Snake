const express = require('express');
const app = express();
const router = require('./src/backend/network/routes');
const bodyparser = require('body-parser');
const cors = require('cors')
const {config} = require('./config/index')

const port = config.port


// database
const db = require('./src/backend/db');
db();


app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log(`server corriendo en: http://localhost:${port}`);
});