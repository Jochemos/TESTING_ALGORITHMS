const elements = 'p78290dfds2534sdf519fsdfsd10273hghvv53416';

const replaceElements = (getElement) => {
  const arrayElements = [];
  for (let i = 0; i < getElement.length; i++) {
    if (!isNaN(getElement[i])) {
      arrayElements.push(Number(getElement[i]));
    } else {
      arrayElements.push('also found some texts between numbers');
    }
  }

  if (getElement.length !== undefined) {
    return arrayElements;
  }
  return false;
};

const searchElements = () => {
  const justItems = replaceElements(elements);
  const testItems = [];

  if (justItems === false) {
    return 'input should be a string !';
  }

  for (let i = 0; i < justItems.length; i++) {
    if (!testItems.includes(justItems[i])) {
      testItems.push(justItems[i]);
    }
  }

  return testItems.sort();
};

const result = searchElements();

if (typeof (result) !== 'string') {
  console.log(`Simple numbers is ${result.join(', ')}`);
} else {
  console.log(`Something went wrong... ${result}`);
}
