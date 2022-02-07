const sumText = require('./nextCypHer');

describe('sumText', () => {
  it('should return string if arguments is right', () => {
    const expectedFirst = 'ALGORITHM';

    const a = 'SX';
    const l = 'TN';
    const g = 'AA';
    const o = 'RI';
    const r = 'TH';
    const i = 'EC';
    const t = 'RE';
    const h = 'IG';
    const m = 'TM';

    const anyOne = sumText(a, l, g, o, r, i, t, h, m);

    expect(anyOne).toBe(expectedFirst);
  });

  it('should return error if arguments is too long', () => {
    const expectedNext = 'Error: 407, info: One of inputs is too long';

    const no = 'NO';
    const way = 'WAY';

    const anyTwo = sumText(no, way);

    expect(anyTwo).toBe(expectedNext);
  });

  it('should return error if arguments is not to be', () => {
    const expectedOver = 'Error: 408, info: Input not found';

    const no = 'NO';
    const zeroVal = '';

    const anyThree = sumText(no, no, zeroVal);

    expect(anyThree).toBe(expectedOver);
  });
});
