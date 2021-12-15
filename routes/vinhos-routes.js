const express = require('express');
const router = express.Router();
const VinhosController = require('../controllers/vinhos-controller');

router.get('/', VinhosController.listVinhos);
router.post('/',  VinhosController.createVinho);
module.exports = router;