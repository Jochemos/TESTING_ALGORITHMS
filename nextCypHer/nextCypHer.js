const myFun = (input) => {
  const h = [];
  const obj = {};
  const tab = [];
  const tab2 = [];
  const tab3 = [];

  if (input.length >= 3) {
    return errors['407'] = true;
  }

  if (input.length === 0 || input.length === 1) {
    return errors['408'] = true;
  }

  // function for delete any input value from interior this object
  const myGo = (lettersOrNumbers) => lettersOrNumbers.length = 0;

  for (let s = 1; s <= input.length; s + 2) {
    h.push(input.slice((s++) - 1, (s++))); // devide pair of string as two each for next validation
  }

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let t = 0; t <= letters.length; t++) {
    const z = [];
    for (let r = 6; r > -21; r--) {
      if (r !== 0) {
        z.push(r);
      }
      obj[letters.slice(t, t + 1)] = z[t]; // object with all dependences for letters { A: 6, B:5 ... Z: -20 }
    }
  }

  for (let n = 0; n < h.length; n++) {
    for (let v = 0; v <= h[n].length; v++) {
      if (v) {
        const txt = h[n][v++]; // describe letters which are decrement or increment functions
        Object.entries(obj).forEach((key, value) => {
          if (key.includes(txt)) {
            for (let t = 0; t <= txt.length; t++) {
              tab.push(key[t]); // include dependences for letters like ['A', -1]
            }
          }
        });
      }
      // console.log(h[n][v]); // B C D

      for (let f = 0; f < letters.length; f++) {
        // h[n][v] describe first part letters from two-part pairs
        if (h[n][v] === letters[f]) {
          // console.log(letters[f + tab[1]]);
          tab2.push(letters[f + tab[1]]);
          myGo(tab);
        }
      }
    }
  }

  // correct code and explain how get to finish result
  if (tab2[0] === undefined) {
    for (let f = 0; f < letters.length; f++) {
      if (input[0] === letters[f]) {
        for (let g = 0; g < tab.length; g++) {
          tab2.push(letters[f + tab[g]]);
        }
        for (let h = 0; h <= tab2.length; h++) {
          if (tab2[h] !== undefined) {
            tab3.push(tab2[h]);
          }
        }
        myGo(tab2);
      }
    }
  }
  return tab3;
};

// this is string to input function
const a = 'SX';
const l = 'TN';
const g = 'AA';
const o = 'RI';
const r = 'TH';
const i = 'EC';
const t = 'RE';
const h = 'IG';
const m = 'TM';

const sumText = (...allThings) => {
  const tablo = [];
  if (Object.keys(errors).length === 0) {
    allThings.forEach((e) => {
      tablo.push(myFun(e));
    });
  }

  if (Object.keys(errors) == '408') {
    try {
      throw new Error(408, 'Input not found');
    } catch (x) {
      return `${x}, info: ${'Input not found'}`;
    }
  }

  if (Object.keys(errors) == '407') {
    try {
      throw new Error(407, 'One of inputs is too long');
    } catch (x) {
      return `${x}, info: ${'One of inputs is too long'}`;
    }
  }

  return tablo.join('');
};

const errors = {};

console.log(`${sumText(a, l, g, o, r, i, t, h, m)}`);

module.exports = sumText;
