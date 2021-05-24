const registerController = require("../../controllers/auth/register");
const validator = require("../../utils/validation/validator");

const express = require("express");

const router = express.Router();

router.get("/", registerController.getRegisterPage);

router.post(
  "/",
  validator.checkIfIsNotEmpty("name"),
  validator.checkIfIsNotEmpty("address"),
  validator.checkIfIsNotEmpty("delivery"),
  validator.checkIfIsNotEmpty("phoneCode"),
  validator.checkIfIsNotEmpty("phone"),
  validator.checkIfIsNotEmpty("password"),
  validator.checkLength("phoneCode", 3, 3),
  validator.checkLength("phone", 8, 8),
  validator.checkLength("password", 6, 12),
  validator.isNumber("phone"),
  validator.isEmail("email"),
  (req, res, next) => {
    console.log(req.body);
  }
);

module.exports = router;
