const { User } = require("../entities/User");

class CreateUser {
  constructor(userRepository, idGenerator) {
    this.userRepository = userRepository;
    this.idGenerator = idGenerator;
  }

  async execute(userData) {
    const user = new User(
      this.idGenerator.generate(),
      userData.name,
      userData.email
    );

    await this.userRepository.save(user);
    return user;
  }
}

module.exports = { CreateUser };
