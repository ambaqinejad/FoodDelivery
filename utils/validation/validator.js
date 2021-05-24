const statusCode = require("../../helpers/status/code");
const errorMessage = require("../../helpers/messages/error");

const checkIfIsNotEmpty = (elName) => {
  return (req, res, next) => {
    if (!req.body[elName]) {
      return res.status(statusCode.FORBIDDEN).json({
        message: errorMessage.EMPTY_FIELD,
      });
    }
    next();
  };
};

const checkLength = (elName, min, max) => {
  return (req, res, next) => {
    if (req.body[elName].length > max || req.body[elName].length < min) {
      return res.status(statusCode.FORBIDDEN).json({
        message: errorMessage.INVALID_INPUT,
      });
    }
    next();
  };
};

const isEmail = (elName) => {
  return (req, res, next) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(req.body[elName])) {
      return res.status(statusCode.FORBIDDEN).json({
        message: errorMessage.INVALID_INPUT,
      });
    }
    next();
  };
};

const isNumber = (elName) => {
  return (req, res, next) => {
    if (isNaN(+req.body[elName])) {
      return res.status(statusCode.FORBIDDEN).json({
        message: errorMessage.INVALID_INPUT,
      });
    }
    next();
  };
};

module.exports = {
  checkIfIsNotEmpty,
  checkLength,
  isEmail,
  isNumber,
};
