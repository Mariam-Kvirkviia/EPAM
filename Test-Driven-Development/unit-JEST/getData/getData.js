const axios = require("axios");

const getData = async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  } catch {
    throw Error;
  }
};
module.exports = getData;
