const router = require('express').Router();
const charactersController = require('../controllers/charactersController');

router.route('/all').get(charactersController.getAll);

router.route('/hiragana').get(charactersController.getHiragana);

router.route('/katakana').get(charactersController.getKatakana);

module.exports = router;