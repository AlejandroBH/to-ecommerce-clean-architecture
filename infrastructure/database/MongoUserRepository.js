class MongoUserRepository extends UserRepository {
  constructor(mongoClient) {
    super();
    this.collection = mongoClient.db("app").collection("users");
  }

  async findById(id) {
    const user = await this.collection.findOne({ _id: id });
    return user ? this.mapToDomain(user) : null;
  }

  async save(user) {
    const userDoc = this.mapToPersistence(user);
    await this.collection.insertOne(userDoc);
    return user;
  }

  mapToDomain(doc) {
    return new User(doc._id, doc.name, doc.email);
  }

  mapToPersistence(user) {
    return {
      _id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
