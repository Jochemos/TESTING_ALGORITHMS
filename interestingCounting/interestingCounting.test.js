const myFun = require('./interestingCounting');

describe('myFun', () => {
  it('should return string if argument is prefer', () => {
    const expected = '655656';

    const anyOne = myFun(100);

    expect(anyOne).toBe(expected);
  });

  it('should return error and null if argument is not prefer', () => {
    const anyOne = myFun(150);

    expect(anyOne).toBeNull();
  });

  it('should return error and null if argument is string', () => {
    const anyOne = myFun('string');

    expect(anyOne).toBeNull();
  });

  it('should return null if argument is array or object', () => {
    const anyOne = myFun([2, 'a', 3.2]);
    const anyTwo = myFun({ a: 'exp', 4: 3.2 });

    expect(anyOne).toBeNull();
    expect(anyTwo).toBeNull();
  });
});
