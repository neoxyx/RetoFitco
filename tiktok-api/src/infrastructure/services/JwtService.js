const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "supersecreto";

class JwtService {
  static generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
      expiresIn: "24h",
    });
  }

  static verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
  }
}

module.exports = JwtService;
