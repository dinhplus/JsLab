const express = require('express');
const router = express.Router();
const shortid = require('shortid');
// const db = require('../db');
const userController = require('../controllers/user.controller');
const userValidate = require('../validate/user.validate');
// code below

/**
 * Show userList
 */

router.get('/', userController.index);

/**
 * Query user from user List
 */

router.get('/search', userController.search);
/**
 * Generate new user and store them to Database
 */
router.get('/create', userController.create);
router.post('/create', userValidate.postUser, userController.postUser);

/**
 * Show user detail
 */
router.get('/:id', userController.showUser);
/**
 * Upadate user profile
 */

router.get('/edit/:id', userController.editUser);
router.post('/update/:id', userValidate.updateUser, userController.updateUser);

router.get('/delete/:id', userController.deleteUser);




module.exports = router;