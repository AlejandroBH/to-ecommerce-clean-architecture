const { UserRepository } = require("../../domain/ports/UserRepository");

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = new Map();
  }

  async findById(id) {
    return this.users.get(id) || null;
  }

  async save(user) {
    this.users.set(user.id, user);
    return user;
  }

  async findByEmail(email) {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }

  async delete(id) {
    return this.users.delete(id);
  }
}

module.exports = { InMemoryUserRepository };
