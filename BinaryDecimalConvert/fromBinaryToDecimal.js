const arrayNumbers = []; // array with calculation numbers

const getData = '110001011100';

const getYear = [];
const getMonth = [];

for (let i = 0; i <= getData.length; i++) {
  if (i >= 0 && i < 8) {
    getYear.push(getData[i]);
  }

  if (i > 7 && i < 12) {
    getMonth.push(getData[i]);
  }
}

console.log(getMonth);

const insertInput = [];
insertInput.push(getYear.join('').split(' '));
// insertInput.push(getMonth.join('').split(' '));

console.log(insertInput);

// function for calculation numbers
const checkFunction = function () {
  inputReplace = insertInput.join('').split('').reverse().join('');
  console.log(inputReplace);
  for (let i = inputReplace.length - 1; i >= 0; i--) {
    arrayNumbers.push(inputReplace[i] * 2 ** i);
  }

  const resultNumber = arrayNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);

  return resultNumber;
};

const getResult = checkFunction();

const arrayConvertion = [];

arrayConvertion.push(getResult);

const dataConvertion = arrayConvertion.join('').split('');

const arrayLeft = [];
const arrayRight = [];

if (getResult > 200) {
  for (let i = 0; i < dataConvertion.length; i++) {
    if (i == 0) {
      arrayLeft.push(dataConvertion[i]);
    } else {
      arrayRight.push(dataConvertion[i]);
    }
  }

  arrayLeft.push('0');
  const conclusionView = arrayLeft.concat(arrayRight).join('');

  console.log(conclusionView);
} else if (getResult < 200) {
  dataConvertion.push('0');
  const conclusionView = dataConvertion.join('');

  console.log(conclusionView);
}
