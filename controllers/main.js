const customAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new customAPIError("Please provide your username and password!", 401);

  const id = new Date().getDate();
  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created!", token });
};

const dashboard = async (req, res) => {
  res.send("Dashboard");
};

module.exports = { login, dashboard };
