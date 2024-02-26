const shuffle = require("../src/shuffle");

describe("shuffle should return an array", () => {
  test("check that shuffle returns an array", () => {
    expect(Array.isArray(shuffle([1, 2, 3, 4, 5]))).toBe(true);
  });

  test("check that it returns an array of the same length as the argument sent in", () => {
    expect(shuffle([1, 2, 3, 4, 5]).length).toBe(5);
  });
  test("check that all the same items are in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toEqual(expect.arrayContaining(array));
  });

  test("check that the array is shuffled", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).not.toEqual(array);
  });

});
