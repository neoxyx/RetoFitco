const JwtService = require("../services/JwtService");

class AuthController {
  static login(req, res) {
    const { username } = req.body;
    const token = JwtService.generateToken({ id: 1, username });
    res.json({ token });
  }
}

module.exports = AuthController;
