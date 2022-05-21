import { greet } from "./index.js";

describe("test", function () {
  it('should return "Hello ${name}"', function () {
    const name = "John";
    const result = greet(name);
    expect(result).toBe(`Hello ${name}`);
  });
});
