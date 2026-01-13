class PlaceOrder {
  constructor(orderRepository, productRepository, paymentService, idGenerator) {
    this.orderRepository = orderRepository;
    this.productRepository = productRepository;
    this.paymentService = paymentService;
    this.idGenerator = idGenerator;
  }

  async execute(orderData) {
    // Validar productos
    const products = await this.validateProducts(orderData.items);

    // Calcular total
    const total = products.reduce((sum, product) => sum + product.price, 0);

    // Procesar pago
    const paymentResult = await this.paymentService.processPayment(
      total,
      orderData.paymentMethod
    );

    // Crear orden
    const order = new Order(
      this.idGenerator.generate(),
      orderData.customerId,
      products,
      total,
      paymentResult.transactionId
    );

    // Guardar orden
    await this.orderRepository.save(order);

    return order;
  }

  async validateProducts(items) {
    const products = [];
    for (const item of items) {
      const product = await this.productRepository.findById(item.productId);
      if (!product)
        throw new Error(`Producto no encontrado: ${item.productId}`);
      products.push(product);
    }
    return products;
  }
}
