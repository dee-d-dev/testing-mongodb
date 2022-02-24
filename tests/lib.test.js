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

describe("test for string", () => {
  it("should return greetings", () => {
    const result = lib.greet("Dotun");
    expect(result).toContain("Dotun");
  });
});

describe("test for arrays", () => {
  it("should return an array", () => {
    const result = lib.getCurrencies();

    //too specific
    // expect(result[0]).toBe('NGN')
    // expect(result[1]).toBe('EUR')
    // expect(result[2]).toBe('DIR')

    //proper way
    // expect(result).toContain("NGN");
    // expect(result).toContain("EUR");
    // expect(result).toContain("DIR");

    //ideal way
    expect(result).toEqual(expect.arrayContaining(["NGN", "EUR", "DIR"]));
  });
});

describe("get products", () => {
  it("should return product with given id", () => {
    const result = lib.getProducts(1);

    //too specific
    // expect(result).toEqual({ id: 1, price: 10 });

    //ideal
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("testing exception", () => {
  it("should throw error if username is falsy", () => {
    const args = [null, 0, false, NaN, undefined, ""];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username passed", () => {
    const result = lib.registerUser("Dotun");

    expect(result).toMatchObject({ username: "Dotun" });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("fizz buzz", () => {
  it("should throw error if  input is not a number", () => {
    expect(() => {
      lib.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz({});
    }).toThrow();
  });

  it("should return FizzBuzz if input is divisible by 5 & 3", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return fizz if it is divisible by 3", () => {
    const result = lib.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if it is divisible by 5", () => {
    const result = lib.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return input if not divisble by 3 or 5", () => {
    const result = lib.fizzBuzz(4);
    expect(result).toBe(4);
  });
});
