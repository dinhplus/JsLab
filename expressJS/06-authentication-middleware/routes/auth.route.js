const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authValidate = require('../validate/auth.validate');

router.get('/', authController.getLogin);
router.post('/', authValidate.postLoginValidate, authController.postLogin);

module.exports = router;