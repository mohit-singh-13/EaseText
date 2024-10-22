// authentication
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authentication = async (req, res) => {
  try {
    // extract jwt token
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login and try again",
      });
    }
    // verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;

      return res.json({ success: true });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
    // next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong, while verifying the token",
    });
  }
};
