// const { MongoClient } = require("mongodb");
const {
  UserController,
} = require("./infrastructure/controllers/UserController");
const {
  UserApplicationService,
} = require("./application/services/UserApplicationService");
const { CreateUser } = require("./domain/usecases/CreateUser");
const { GetUser } = require("./domain/usecases/GetUser");
const {
  InMemoryUserRepository,
} = require("./infrastructure/adapters/InMemoryUserRepository");
const {
  UUIDGenerator,
} = require("./infrastructure/adapters/UUIDGenerator");

async function createContainer() {
  // Infrastructure
  // const mongoClient = await MongoClient.connect(process.env.MONGO_URL);
  const userRepository = new InMemoryUserRepository(); // O MongoUserRepository(mongoClient)
  const idGenerator = new UUIDGenerator();

  // Domain
  const createUserUseCase = new CreateUser(userRepository, idGenerator);
  const getUserUseCase = new GetUser(userRepository);

  // Application
  const userAppService = new UserApplicationService(
    createUserUseCase,
    getUserUseCase,
    null, // updateUserUseCase - no implementado aún
    null  // deleteUserUseCase - no implementado aún
  );

  // Infrastructure (Controllers)
  const userController = new UserController(userAppService);

  return {
    userController,
    // ... otros servicios
  };
}

module.exports = { createContainer };
