class OrderRepository {
    async findById(id) {
        throw new Error("Implementar en adaptador");
    }

    async save(order) {
        throw new Error("Implementar en adaptador");
    }

    async findByCustomerId(customerId) {
        throw new Error("Implementar en adaptador");
    }

    async delete(id) {
        throw new Error("Implementar en adaptador");
    }
}

module.exports = { OrderRepository };
