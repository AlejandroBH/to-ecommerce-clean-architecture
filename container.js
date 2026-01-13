const { MongoClient } = require("mongodb");
const {
  UserController,
} = require("./infrastructure/controllers/UserController");
const {
  UserApplicationService,
} = require("./application/services/UserApplicationService");
const { CreateUser } = require("./domain/usecases/CreateUser");
const {
  InMemoryUserRepository,
} = require("./infrastructure/adapters/InMemoryUserRepository");

async function createContainer() {
  // Infrastructure
  const mongoClient = await MongoClient.connect(process.env.MONGO_URL);
  const userRepository = new InMemoryUserRepository(); // O MongoUserRepository(mongoClient)
  const idGenerator = new UUIDGenerator();

  // Domain
  const createUserUseCase = new CreateUser(userRepository, idGenerator);

  // Application
  const userAppService = new UserApplicationService(createUserUseCase);

  // Infrastructure (Controllers)
  const userController = new UserController(userAppService);

  return {
    userController,
    // ... otros servicios
  };
}

module.exports = { createContainer };
