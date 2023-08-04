const delay = require("./delay");
describe("work with asynchronous functions", () => {
  test("function returns 2*5", async () => {
    let response = await delay(() => 2 * 5, 3000);
    expect(response).toEqual(10);
  });
});
