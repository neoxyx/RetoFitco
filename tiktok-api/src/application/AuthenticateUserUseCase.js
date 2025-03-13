const UserRepository = require("../infrastructure/repositories/UserRepository");
const JwtService = require("../infrastructure/services/JwtService");

class AuthenticateUserUseCase {
  async execute(email, password) {
    const user = await UserRepository.findUserByEmail(email);
    if (!user) throw new Error("Usuario no encontrado");

    // Validar contraseña (aquí podrías usar bcrypt)
    if (password !== user.password) throw new Error("Contraseña incorrecta");

    return JwtService.generateToken(user);
  }
}

module.exports = new AuthenticateUserUseCase();
