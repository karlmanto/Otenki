const knex = require("knex")(require("../knexfile"));

exports.getAll = (req, res) => {
    knex('characters')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).json({ message: 'Error retrieving characters.', err }));
};

exports.getHiragana = (req, res) => {
    knex('characters')
        .where('type', 'hiragana')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).json({ message: 'Error retrieving characters.', err }));
};

exports.getKatakana = (req, res) => {
    knex('characters')
        .where('type', 'katakana')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).json({ message: 'Error retrieving characters.', err }));
};