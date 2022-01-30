const myFun = require('./CARTESIAN');

describe('myFun', () => {
  it('should return null if arguments is not sufficient', () => {
    const one = myFun([0], undefined);
    const two = myFun([], undefined);

    expect(one).toBeNull();
    expect(two).toBeNull();
  });

  it(`should return product of two arguments`, () => {
    const one = myFun([1], [2]);
    const two = myFun([1, 2], [3, 4]);

    expect(one).toEqual("1 2");
    expect(two).toEqual("1 3 1 4 2 3 2 4");
  });
});
