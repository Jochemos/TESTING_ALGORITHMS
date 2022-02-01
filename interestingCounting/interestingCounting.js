// This function determines analoque number as only 5 and 6 respect input value
const myFun = (input) => {
  const number = input ** 3;
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

  return u[input];
};

// input number must be not higher from 1 000 000 000
const input = 100;
console.log(`${myFun(input)}`);
