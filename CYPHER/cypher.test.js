const cypHer = require('./cypher');

describe('cypHer', () => {
  it('should return string if argument is not three-part number between 99 to 999', () =>{

    const expected = `enter number between 100 to 999`;

    let one = cypHer(`1`);
    let two = cypHer(`11`);
    let three = cypHer(`1111`);
    let four = cypHer(`aaa`);

    expect(one).toBe(expected);
    expect(two).toBe(expected);
    expect(three).toBe(expected);
    expect(four).toBe(expected);
  });

  
});
