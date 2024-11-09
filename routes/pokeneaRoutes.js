const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/info', pokeneaController.getPokeneaInfo);
router.get('/filosofia', pokeneaController.getPokeneaPhilosophy);

module.exports = router;