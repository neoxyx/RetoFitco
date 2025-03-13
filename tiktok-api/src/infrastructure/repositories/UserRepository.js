const { AppDataSource } = require("../../config/ormconfig");
const { User } = require("../../domain/User");

class UserRepository {
  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async createUser(userData) {
    const user = this.repository.create(userData);
    return await this.repository.save(user);
  }

  async findUserById(userId) {
    return await this.repository.findOne({ where: { id: userId } });
  }

  async findUserByEmail(email) {
    return await this.repository.findOne({ where: { email } });
  }

  async updateUser(userId, updateData) {
    await this.repository.update(userId, updateData);
    return await this.findUserById(userId);
  }

  async deleteUser(userId) {
    return await this.repository.delete(userId);
  }
}

module.exports = new UserRepository();
