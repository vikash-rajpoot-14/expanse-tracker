const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.authenticate = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    //   console.log(JSON.parse(token));
    const decode = jwt.verify(JSON.parse(token), process.env.JWT_SECRET);
    // console.log("decode", decode);
    const user = await User.findByPk(decode._id);
    // console.log(user);
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      msg: "token not valid",
    });
  }
};
