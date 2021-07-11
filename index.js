const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/backend/network/routes');
const bodyparser = require('body-parser');
const cors = require('cors')

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