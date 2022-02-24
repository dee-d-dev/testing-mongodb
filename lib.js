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
  return { id: productId, price: 10, quanttity: 1 };
};
module.exports.registerUser = function (username) {
  if (!username) throw new Error("Username is required");

  return { id: new Date().getTime(), username: username };
};
module.exports.fizzBuzz = function (input) {
  if (typeof input !== "number") throw new Error("input must be a number");

  if (input % 3 === 0) return 'Fizz';

  if (input % 5 === 0) return 'Buzz';

  if (input % 5 === 0 && input % 3 === 0) return 'FizzBuzz';

  return input;
};
