const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');
const authValidate = require('../validate/auth.validate');

router.get('/', middleware.adminLogin, middleware.redirectAdmin);
router.get('/login', middleware.redirectAdmin, authController.getLogin);
router.post('/login', authValidate.postLoginValidate, authController.postLogin);

module.exports = router;