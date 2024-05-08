import {sayHello} from "./main";

describe("Main", () => {
  it("should return \"Hello Javascript\"", () => {
    const result = sayHello("Javascript");
    expect(result).toBe("Hello Javascript");
  });
});