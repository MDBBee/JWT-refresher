const customAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new customAPIError("No token provided!", 401);

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    throw new customAPIError(
      "Not Authorized to access this route!!!, Sorry!!!:)",
      401
    );
  }
};

module.exports = authMiddleWare;
