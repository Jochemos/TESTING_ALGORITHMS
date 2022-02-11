// Stage three: Constructor function

// Function create new object from which take values for THIS

const ProductMargin = function (id, productBrand, productionCost, saleProduct) {
  this.id = id;
  this.productBrand = productBrand;
  this.productionCost = productionCost;
  this.saleProduct = saleProduct;
  this.resultCalc = ((saleProduct - productionCost) / saleProduct) * 100;

  this.identyProd = `Product number is: ${this.id}`;
  /* console.log(`${this.identyProd}`); */
};

// Add property to function prototype
ProductMargin.prototype.resultMargin = function () {
  this.numberOne = 'cost is:';
  this.numberTwo = 'then product sale is:';
  this.baseTxt = 'margin from sale product in gross value is:';

  return `${this.productBrand} ${this.numberOne} $${this.productionCost}, ${this.numberTwo} $${this.saleProduct}, ${this.baseTxt} ${this.resultCalc.toFixed(2)} %`;
};

const ProductMarkUp = function (id, productBrand, productionCost, saleProduct) {
  // Call next constructor, practically get values of this from target function
  ProductMargin.call(this, id, productBrand, productionCost, saleProduct);

  this.resultCalc = ((saleProduct - productionCost) / productionCost) * 100;
};

// method for changes the prototype of object, this example create concatination two prototypes
Object.setPrototypeOf(ProductMarkUp.prototype, ProductMargin.prototype);

ProductMarkUp.prototype.resultMarkUp = function () {
  this.secoundTxt = 'Price mark-up value is:';
  return `${this.secoundTxt} ${this.resultCalc.toFixed(2)} %`;
};

// Constant product values and create new objects
const hat = new ProductMarkUp('nike23567', 'Hat: Nike', 15, 35);
const boots = new ProductMarkUp('adidas90834', 'Boots: Adidas', 134, 267);

// Describe results on console
console.log(hat.resultMargin());
console.log(hat.resultMarkUp());

console.log(boots.resultMargin());
console.log(boots.resultMarkUp());
