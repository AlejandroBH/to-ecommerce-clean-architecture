class UserRepository {
  async findById(id) {
    throw new Error("Implementar en adaptador");
  }

  async save(user) {
    throw new Error("Implementar en adaptador");
  }

  async findByEmail(email) {
    throw new Error("Implementar en adaptador");
  }

  async delete(id) {
    throw new Error("Implementar en adaptador");
  }
}

module.exports = { UserRepository };
