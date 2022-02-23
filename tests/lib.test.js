const lib = require("../lib");

test("should return a positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("should return a negative number if input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});
test("should return 0 if input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
