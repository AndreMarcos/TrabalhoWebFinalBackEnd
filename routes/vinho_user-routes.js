const express = require('express');
const router = express.Router();
const Vinho_userController = require('../controllers/vinho_user-controller');

router.get('/', Vinho_userController.listVinhoUser);
module.exports = router;