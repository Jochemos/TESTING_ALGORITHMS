// ALGORITHM ON BUILDING

const cypHer = (input) => {
  const strToTable = input.split(' ');
  const tablo = [];
  const tablo2 = [];
  const obj = {};
  const empty = (arr) => arr.length = 0;

  const tabloNextPart = [];

  for (let e = 0; e < strToTable.length; e++) {
    if (strToTable[e].length !== 3 || isNaN(strToTable[e])) {
      try {
        throw new Error(404, 'Number between 100 to 999 not found !');
      } catch (x) {
        alert(`code:${x.number}, info: ${x.message}`);
      }
    }

    tablo.push(parseInt(strToTable[e]));

    for (let i = 150; i > 120; i--) {
      const expr = Math.round((tablo[e] / i) - 0.5);
      switch (expr) {
        case 2:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 3:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 4:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 5:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 6:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 7:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 8:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        case 9:
          if ((tablo[e] % i) >= 65 && (tablo[e] % i) <= 90) {
            tablo2.push(i);
          }
          break;
        default:
          try {
            throw new Error(407, 'Require number not found !');
          } catch (x) {
            alert(`code:${x.number}, info: ${x.message}`);
          }
      }
    }
    obj[tablo[e]] = tablo2.slice(0, tablo2.length);
    empty(tablo2);
  }

  Object.keys(obj).forEach(function(key) {

  for(let a=0; a<obj[key].length; a++){
    delete obj
    obj[key].forEach(e => {
      if(!isNaN(e)){
        const nextVal = key % e;
        tabloNextPart.push(String.fromCodePoint(nextVal));
      }

    })
  }

});
  // return JSON.stringify(obj);
  return JSON.stringify(tabloNextPart);
};

const answer = '720 739 477 327 984 730';

console.log(`${cypHer(answer)}`);

module.exports = cypHer;

// String.fromCodePoint(65) return "A"
// between 65 to 90 is A to Z
// number divide between 120 to 150... modulo is end point to resolve ASCII analogue
