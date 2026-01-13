class Order {
    constructor(id, customerId, items, total, transactionId) {
        this.validateOrder(items, total);
        this.id = id;
        this.customerId = customerId;
        this.items = items;
        this.total = total;
        this.transactionId = transactionId;
        this.status = "pending";
        this.createdAt = new Date();
    }

    validateOrder(items, total) {
        if (!items || items.length === 0) {
            throw new Error("La orden debe contener al menos un producto");
        }
        if (total <= 0) {
            throw new Error("El total debe ser mayor a cero");
        }
    }

    markAsCompleted() {
        this.status = "completed";
    }

    markAsCancelled() {
        this.status = "cancelled";
    }

    isCompleted() {
        return this.status === "completed";
    }
}

module.exports = { Order };
