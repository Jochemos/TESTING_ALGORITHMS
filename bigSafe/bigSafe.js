// Algorithm on building -------------------

const doZero = (fix) => fix.length = 0;
const objectKeys = {};
const objectSummary = {};
const positionLetters = [];
const containLetters = [];

const myFun = (inputOne, inputTwo) => {
  const inputBetween = inputOne.split('');

  const inputBase = inputBetween.sort();

  for (let i = 0; i < inputBase.length; i++) {
    containLetters.push(inputBase[i]);
    positionLetters.push(i);

    const calcLetters = [];

    if (inputBase[i] != inputBase[i + 1]) {
      objectKeys[containLetters[i]] = positionLetters;

      Object.entries(objectKeys).forEach(([key, value]) => {
        calcLetters.push(value);
      });

      objectSummary[inputBase[i]] = calcLetters[0].slice('');

      doZero(positionLetters);
    }
  }

  return JSON.stringify(objectSummary);
  // {"a":[0,1],"b":[2,3,4,5],"c":[6,7,8,9],"d":[10,11,12,13],"f":[14,15]}
};

const attemptTest = 'abbbbccccddaffdd';
const entrySafe = 'abcfgh';

console.log(myFun(attemptTest, entrySafe));
