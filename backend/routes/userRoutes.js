const express = require('express');
const { registerUser, authUser, loginMetamask } = require('../controllers/userControllers');

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/loginmetamask").post(loginMetamask);

module.exports = router;
