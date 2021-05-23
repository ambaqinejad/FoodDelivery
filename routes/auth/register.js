const registerController = require("../../controllers/auth/register");

const express = require("express");

const router = express.Router();

router.get("/", registerController.getRegisterPage);

module.exports = router;
