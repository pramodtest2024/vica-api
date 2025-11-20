const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("APPLIFRANCE-JWT"); // custom header

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token missing (APPLIFRANCE-JWT header required)"
    });
  }

  try {
    const secret = process.env.secret;
    const decoded = jwt.verify(token, secret);

    // save decoded data (userID, isAdmin) into request
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid / expired token"
    });
  }
};
