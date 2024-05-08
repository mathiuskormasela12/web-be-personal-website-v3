import {sayHello} from "../src/main";

describe("Main", () => {
  it("should return \"Hello Node Js\"", () => {
    const result = sayHello("Node Js");
    expect(result).toBe("Hello Node Js");
  });
});