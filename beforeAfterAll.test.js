const TestRunner = require("jest-runner");

const setUpFirst = () => console.log("Setting up before test run.");
const tearDownNow = () => console.log("Tear Down now.");

describe("New account creation check", () => {
  beforeAll(() => setUpFirst());
  afterAll(() => tearDownNow());
  test("New account 1", () => {
    const account = "account1";
    expect(account).toBe("account1");
  });

  test("New account 2", () => {
    const account = "account2";
    expect(account).toBe("account2");
  });
});
