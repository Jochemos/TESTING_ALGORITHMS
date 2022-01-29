const isPalindrome = (words) =>{
  const lng = words.length;
  for(let i=0; i<lng/2; i++){
    if(words[i] === words[lng-1-i]){
      return true;
    }else{
      return false;
    }
  }
};

const yourPalindrome = isPalindrome('RACECAR');
console.log(`${yourPalindrome}`);
