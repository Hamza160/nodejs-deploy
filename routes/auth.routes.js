const router = require('express').Router();
const authController = require('../controllers/auth.controller');

/**
 * @path Post /api/auth/register
 * @desc Register New User
 * @access Public
 */
router.post('/register', authController.registerApi);



module.exports = router;