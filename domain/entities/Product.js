class Product {
  constructor(id, name, price, category) {
    this.validatePrice(price);
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  validatePrice(price) {
    if (price <= 0) throw new Error("Precio debe ser positivo");
  }

  applyDiscount(percentage) {
    this.price = this.price * (1 - percentage / 100);
  }
}

module.exports = { Product };
