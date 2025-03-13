const AuthenticateUserUseCase = require("../../application/AuthenticateUserUseCase");

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await AuthenticateUserUseCase.execute(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();
