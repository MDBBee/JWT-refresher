const jwt = require("jsonwebtoken");
const { BadReqError, UnauthenticatedError } = require("../errors/index");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new BadReqError("No token provided!");

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    throw new UnauthenticatedError(
      "Not Authorized to access this route!!!, Sorry!!!:)"
    );
  }
};

module.exports = authMiddleWare;
