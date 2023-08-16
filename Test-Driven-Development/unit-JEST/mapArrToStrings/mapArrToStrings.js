const mapArrToStrings = (arr) => {
  return arr
    .filter((item) => Number.isInteger(item))
    .map((el) => el.toString());
};

module.exports = mapArrToStrings;
