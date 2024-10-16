const customAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadReqError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadReqError;
