const hello = require("./hello");
describe("My hello!! From Spain", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Spain");
  });
});
