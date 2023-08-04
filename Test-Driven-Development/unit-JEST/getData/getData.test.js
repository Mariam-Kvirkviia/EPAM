const axios = require("axios");
jest.mock("axios"); //mocking axios
const getData = require("./getData");
describe("get Data", () => {
  test("gd", async () => {
    let data = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    await axios.get.mockReturnValue(data);

    let gd = await getData();
    expect(axios.get).toBeCalledTimes(1);
    console.log(gd);
    expect(gd).toBe(data);
    expect(gd).toMatchSnapshot();
  });
});
