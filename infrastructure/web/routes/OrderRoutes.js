const express = require("express");
const router = express.Router();

module.exports = (orderController) => {
  router.post("/", orderController.placeOrder.bind(orderController));
  router.get("/:id", orderController.getOrder.bind(orderController));

  return router;
};
