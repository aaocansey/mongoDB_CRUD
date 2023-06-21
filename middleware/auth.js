const jwt = require("jsonwebtoken");
const userModel = require("../models/users_model");
exports.protect = async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    return res.send({
      message: "unsuccessful",
      error: "Please login to access route",
    });
  }
  let user;
  try {
    let decoded = jwt.verify(token, "node jwt");

    user = await userModel.findById(decoded.id);
    if (!user) {
      return res.send({
        message: "unsuccessful",
        error: "Please signUp to access route",
      });
    }
  } catch (error) {
    return res.send({
      message: "unsuccessful",
      error: "Please signUp to access route",
    });
  }
  req.user = user;
  next();
};
