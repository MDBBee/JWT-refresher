const customAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new customAPIError("Please provide your username and password!", 400);

  const id = new Date().getDate();
  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created!", token });
};

const dashboard = async (req, res) => {
  const { id, username } = req.user;
  const luckyNum = Math.floor(Math.random() * 101);
  res.status(200).json({
    msg: `Hello ${username} with customerID: ${id}`,
    secret: `Here is your authorized data: ${luckyNum}`,
  });
};

module.exports = { login, dashboard };
