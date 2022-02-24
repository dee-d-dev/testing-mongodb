module.exports.absolute = function (number) {
  return number >= 0 ? number : -number;
};

module.exports.greet = function (name) {
  return `Hello ${name}!`;
};

module.exports.getCurrencies = function () {
  return ["NGN", "EUR", "DIR"];
};
module.exports.getProducts = function (productId) {
  return { id: productId, price: 10, quanttity: 1};
};
