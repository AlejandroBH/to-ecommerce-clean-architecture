class User {
  constructor(id, name, email) {
    this.validateEmail(email);
    this.id = id;
    this.name = name;
    this.email = email;
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Email inválido");
    }
  }

  updateProfile(newData) {
    if (newData.name) this.name = newData.name;
    if (newData.email) {
      this.validateEmail(newData.email);
      this.email = newData.email;
    }
  }
}

module.exports = { User };
