const fibonacciMax = (max) =>{
  let startNum = [0, 1];
  for(let i=startNum[1]; i<max; i++){
    let nextNum = startNum[i]+startNum[i-1];
    startNum.push(nextNum);
  }
  console.log(startNum.join(", "));
}

fibonacciMax(10);
