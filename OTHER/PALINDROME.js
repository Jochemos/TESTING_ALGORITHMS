const isPalindrome = (words) => {
  const lng = words.length;
  for (let i = 0; i < lng / 2; i++) {
    if (words[i] === words[lng - 1 - i]) {
      return true;
    }
    try {
      throw new Error(404, 'Palindrome not found');
    } catch (e) {
      alert(`code:${e.number}, info: ${e.message}`);
    }
  }
};

const yourPalindrome = isPalindrome('RACECAR');
console.log(`${yourPalindrome}`);
