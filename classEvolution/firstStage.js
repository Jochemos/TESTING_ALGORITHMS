// Stage one: Normal base functions as objects and freaks of this

function calculateProfit(productionCost, saleProduct) {
  const saleMarginGross = {
    baseTxt: 'margin from sale product in gross value is: ',
    numberOne: 'Include your product cost is: ', // local value for this by bind method
    numberTwo: 'then product sale is: ', // local value for this by bind method

    resultMargin() {
      const resultMargin = ((saleProduct - productionCost) / saleProduct) * 100;
      console.log(`${this.numberOne} $${productionCost}, ${this.numberTwo} $${saleProduct}, ${this.baseTxt} ${resultMargin.toFixed(2)} %`);
    },
  };

  const baseTxt = 'margin from sale is not exist, because server is crashed';
  // const numberOne: "Include your product cost is: " // value from global object
  // const numberTwo: "then product sale is: " // value from global object

  saleMarginGross.resultMargin = saleMarginGross.resultMargin.bind(saleMarginGross);
  saleMarginGross.resultMargin();

  const priceMarkUp = {
    secoundTxt: 'Price mark-up value is:',
    thirdTxt: 'Great job... but may been better !',

    resultMarkUp() {
      const resultMarkUp = ((saleProduct - productionCost) / productionCost) * 100;
      return () => console.log(`${this.secoundTxt} ${resultMarkUp.toFixed(2)} %, ${this.thirdTxt}`);
    },
  };

  const secoundTxt = 'Price mark-up value is not exist... something is wrong';

  const thirdTxt = 'Sorry !';

  const firstMarkUpWriter = priceMarkUp.resultMarkUp();
  firstMarkUpWriter();

  // const standAlone = priceMarkUp.resultMarkUp;
  // const standAloneTwo = standAlone();
  // standAloneTwo(); // way for get value from global object when exist arrow function
}

calculateProfit(145, 289); // Enter your product price and product cost after sell

// © github.com/jochemos
