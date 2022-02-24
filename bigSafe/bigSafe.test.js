const bigSafe = require('./bigSafe');

describe('bigSafe', () => {
  it('should return string if secound argument is positive in relation with first argument', () => {
    const expected = 'Code break !';

    const one = bigSafe('abcabc', 'bcabca');

    expect(one).toBe(expected);
  });

  it('should return string if secound argument is negative in relation with first argument', () => {
    const expected = 'Error: 319, info: Code not broken';

    const two = bigSafe('aaabba', 'abbbba');

    expect(two).toBe(expected);
  });

  it('should return string if any of two arguments is less than other', () => {
    const expected = 'Error: 319, info: Code not broken';

    const three = bigSafe('abcdef', 'abc');

    expect(three).toBe(expected);
  });

  it('should return string if any of two arguments is not a number or string', () => {
    const expected = 'Error: 319, info: Code not broken';

    const four = bigSafe('abcdef', {});

    expect(four).toBe(expected);
  });
});
