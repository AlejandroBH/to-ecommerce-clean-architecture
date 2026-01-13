class PaymentService {
    async processPayment(amount, paymentMethod) {
        throw new Error("Implementar en adaptador");
    }

    async refundPayment(transactionId) {
        throw new Error("Implementar en adaptador");
    }

    async getPaymentStatus(transactionId) {
        throw new Error("Implementar en adaptador");
    }
}

module.exports = { PaymentService };
