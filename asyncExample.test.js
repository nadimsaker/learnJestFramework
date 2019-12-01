const fetchDataOverApi = require("./fetchData");

//Non async
test("the user data for user 1", () => {
  const data = fetchDataOverApi();
  expect(data).toBe("John");
});

//async
test("the user data for user 1", async () => {
  const data = await fetchDataOverApi();
  expect(data).toBe("John");
});
