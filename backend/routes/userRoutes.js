const express = require('express');
const { registerUser, authUser, loginMetamask, updateUser } = require('../controllers/userControllers');

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/loginmetamask").post(loginMetamask);
router.route("/update").post(updateUser);

module.exports = router;
