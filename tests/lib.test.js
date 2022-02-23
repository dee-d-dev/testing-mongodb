const lib = require("../lib");

describe("absolute test", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a negative number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});


describe('test for string', ()=> {
    it('should return greetings', () => {
        const result = lib.greet('Dotun')
        expect(result).toBe('Hello Dotun')
    })
})