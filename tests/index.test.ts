import { sum } from "../src";

describe("index", () => {
  it("sum", async () => {
    expect(sum(1, 2)).toStrictEqual(3);
  });
});
