// ALGORITHM ON BUILDING

const cypHer = (input) => {
  const strToTable = input.split(" ");
  const tablo = [];
  const tablo2 = [];
  const tablo3 = [];
  const obj = {};

  for (let i = 0; i < strToTable.length; i++) {
    if(strToTable[i].length !== 3 || isNaN(strToTable[i])) {
      try {
        throw new Error(404, 'Number between 100 to 999 not found !');
      } catch(e) {
        alert('code:' + e.number + ', info: ' + e.message);
      };
    };
    tablo.push(parseInt(strToTable[i]));
  }
/* BASE ALGO TO NEXT ACTIONS (ALSO EXAMPLE)
  for(let i=150; i>120; i--){
    if(Math.round((720 / i) - 0.5) === 5){
      if((720 % i)>=65 && (720 % i)<=90){
      //  console.log(i);
      tablo2.push(i);
    //  console.log(tablo2);
      obj[1] = tablo2
      }
    }
  }
*/

 for (let t = 0; t < strToTable.length; t++) {
  tablo2.push([tablo[t].toString()]);
   for (let i = 150; i > 120; i--){
    if (Math.round((tablo[t] / i) - 0.5) === 2 || 3 || 4 || 5 || 6 || 7) {
      if((tablo[t] % i) >= 65 && (tablo[t] % i) <= 90) {
      tablo2.push(i);
      };
    };
  };

   tablo3.push(`stop`);

   for (let d = 0; d < tablo2.length; d++) {
     if (tablo2[d] === Number(tablo2[d])) {
       tablo3.push(tablo2[d]);
       delete tablo2[d];

       for (let v = 0; v < tablo3.length; v++) {
         if(tablo3[v] == Number(tablo3[v])) {
           obj[v] = tablo3[v]
         } else {
           `pause`;
         };
       };
     };
   };
 };

  return JSON.stringify(tablo3);
};

let answer = `720 739 477 327 984 730`;

console.log(`${cypHer(answer)}`);

module.exports = cypHer;

// String.fromCodePoint(65) return "A"
// between 65 to 90 is A to Z
// number divide between 120 to 150... modulo is end point to resolve ASCII analogue
