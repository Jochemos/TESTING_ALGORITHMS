// This function determines analoque number as only 5 and 6 respect input value
// example 1 => 5 or 5 => 65 or 10 => 566 or 50 => 65566
const myFun = (input) => {
  if (typeof (input) === 'object') {
    try {
      throw new Error(318, 'Object detected !');
    } catch (x) {
      console.log(`${x}, info: ${'Object detected !'}`);
    }
    return null;
  }

  if (Array.isArray(input)) {
    try {
      throw new Error(319, 'Array detected !');
    } catch (x) {
      console.log(`${x}, info: ${'Array detected !'}`);
    }
    return null;
  }

  if (isNaN(input)) {
    try {
      throw new Error(320, 'String detected !');
    } catch (x) {
      console.log(`${x}, info: ${'String detected !'}`);
    }
    return null;
  }

  if (input > 100) {
    try {
      throw new Error(321, 'Number is to high !');
    } catch (x) {
      console.log(`${x}, info: ${'Number is to high !'}`);
    }
  } else if (input > 4) {
    var number = input ** 3;
  } else {
    const change = input - 1;
    const numEx = ['5', '6', '55', '56'];
    return numEx[change];
  }

  if (number > 0) {
    const t = [];
    const u = [];

    for (let i = 0; i < number; i++) {
      t.push(i.toString());

      const a = !t[i].includes('0');
      const b = !t[i].includes('1');
      const c = !t[i].includes('2');
      const d = !t[i].includes('3');
      const e = !t[i].includes('4');
      const f = !t[i].includes('7');
      const g = !t[i].includes('8');
      const h = !t[i].includes('9');

      if (a && b && c && d && e && f && g && h) {
        u.push(t[i]);
        delete t[i];
      }
    }
    return u[input - 1];
  }
  return null;
};

const input = /*Enter prefer number*/;
console.log(`${myFun(input)}`);

module.exports = myFun;
