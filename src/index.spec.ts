import { expect } from "chai";
import { greet } from "./index";

describe("test", function () {
  it('should return "Hello ${name}"', function () {
    const name = "John";
    const result = greet(name);
    expect(result).to.equal(`Hello ${name}`);
  });
});
