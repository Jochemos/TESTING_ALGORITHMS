const doZero = (fix) => fix.length = 0;
const objectKeys = {};
const objectAttemptTest = {};
const objectEntrySafe = {};
const positionLetters = [];
const containLetters = [];

const myFun = (inputOne, inputTwo) => {
  const inputBetweenFirst = inputOne.split('');
  const inputBetweenSecond = inputTwo.split('');

  const inputBaseOne = inputBetweenFirst.sort();
  const inputBaseTwo = inputBetweenSecond.sort();

  for (let i = 0; i < inputBaseOne.length; i++) {

    const calcLetters = [];

    containLetters.push(inputBaseOne[i]);
    positionLetters.push(i);


    if (inputBaseOne[i] != inputBaseOne[i + 1]) {
      objectKeys[containLetters[i]] = positionLetters;

      Object.entries(objectKeys).forEach(([key, value]) => {
        calcLetters.push(value);
      });

      delete objectKeys;

      objectAttemptTest[inputBaseOne[i]] = calcLetters[0].slice('').length;

      doZero(positionLetters);
    };
  };

  doZero(containLetters);
  doZero(positionLetters);

  for (let j = 0; j < inputBaseTwo.length; j++) {

    const calcLetters = [];

    containLetters.push(inputBaseTwo[j]);
    positionLetters.push(j);


    if (inputBaseTwo[j] != inputBaseTwo[j + 1]) {
      objectKeys[containLetters[j]] = positionLetters;

      Object.entries(objectKeys).forEach(([key, value]) => {
        calcLetters.push(value);
      });

      delete objectKeys;

      objectEntrySafe[inputBaseTwo[j]] = calcLetters[0].slice('').length;

      doZero(positionLetters);
    };
  };

  const tabloComparisonOne = [];
  const tabloComparisonTwo = [];

  Object.values(objectAttemptTest).forEach(e => tabloComparisonOne.push(e));
  Object.values(objectEntrySafe).forEach(e => tabloComparisonTwo.push(e));

  const comparisonArray = [];

  if(tabloComparisonOne.length === tabloComparisonTwo.length){
    for(let k=0; k<tabloComparisonOne.length; k++){

      const text = tabloComparisonOne[k] === tabloComparisonTwo[k];

      comparisonArray.push(text);

    };
  };

  if(comparisonArray.includes(false)){
    return `Code not broken`;
  }else{
    return `Code break !`;
  };
};

const attemptTest = 'abcdef';
const entrySafe = 'fedcba';

console.log(myFun(attemptTest, entrySafe));
