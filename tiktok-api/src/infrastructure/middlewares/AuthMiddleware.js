const JwtService = require("../services/JwtService");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Acceso denegado" });

  try {
    req.user = JwtService.verifyToken(token.split(" ")[1]);
    next();
  } catch {
    res.status(403).json({ message: "Token inválido" });
  }
};
