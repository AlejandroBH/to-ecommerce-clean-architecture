class ProductRepository {
    async findById(id) {
        throw new Error("Implementar en adaptador");
    }

    async save(product) {
        throw new Error("Implementar en adaptador");
    }

    async findByCategory(category) {
        throw new Error("Implementar en adaptador");
    }

    async delete(id) {
        throw new Error("Implementar en adaptador");
    }
}

module.exports = { ProductRepository };
