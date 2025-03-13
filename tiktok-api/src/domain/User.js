class User {
    constructor(id, name, email, passwordHash) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.passwordHash = passwordHash;
    }
  
    static create({ id, name, email, passwordHash }) {
      if (!id || !name || !email || !passwordHash) {
        throw new Error("Todos los campos son obligatorios");
      }
      return new User(id, name, email, passwordHash);
    }
  }
  
  module.exports = User;
  