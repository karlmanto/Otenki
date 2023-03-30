const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile'));

const app = express();
require('dotenv').config();
const { CLIENT_URL, PORT } = process.env;
const port = PORT || 8080;

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

app.get('/', (req, res) => {
    knex('characters')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
})

app.listen(port, () => console.log(`Listening on ${port}`));