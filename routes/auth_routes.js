const express = require('express');

const {signUpUser, loginUser} = require('../controllers/auth_controllers');

const router = express.Router();

router.route("/signUp").post(signUpUser);
router.route("/login").post(loginUser);

module.exports = router;