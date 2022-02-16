interface Strategy {
  calculateData(productionCost: number, saleProduct: number)
};

class ContextBase {
  public strategy: Strategy;
  public id: string;
  public costProd: number;
  public saleProd: number;

  constructor(strategy: Strategy, id: string, costProd: number, saleProd: number) {
    this.strategy = strategy;
    this.id = id;
    this.costProd = costProd;
    this.saleProd = saleProd;
  }

  public businessLogic(): void {
    const identyProduct = `Product id: ${this.id}`;

    console.log(`${identyProduct}`);

    const result = this.strategy.calculateData(this.costProd, this.saleProd);
  }
}

class StrategyMargin<Gen> {
  public calculateData(productionCost: number, saleProduct: number): void {
    const numberOne = 'cost is:';
    const numberTwo = 'then product sale is:';
    const baseTxt = 'margin from sale product in gross value is:';
    const calcMargin = ((saleProduct - productionCost) / saleProduct) * 100 as number;

    console.log(`${numberOne} $${productionCost}, ${numberTwo} $${saleProduct}, ${baseTxt} ${calcMargin.toFixed(2) as string} %`);

  };
};

class StrategyMarkUp<Gen> {
  public calculateData(productionCost: number, saleProduct: number): void {
    const numberOne = 'cost is:';
    const numberTwo = 'then product sale is:';
    const secoundTxt = 'price mark-up value is:';
    const calcMarkUp = ((saleProduct - productionCost) / productionCost) * 100 as number;

    console.log(`${numberOne} $${productionCost}, ${numberTwo} $${saleProduct}, ${secoundTxt} ${calcMarkUp.toFixed(2) as string} %`);

  };
};

const adidasHat = {
  markId: 'adidas90834',
  buy: 15,
  sale: 35
};

const nikeBoots = {
  markId: 'nike23568',
  buy: 134,
  sale: 267
};

// Describe first strategy - margin of sale product
const hatMargin = new ContextBase(new StrategyMargin<Strategy>(), adidasHat.markId, adidasHat.buy, adidasHat.sale);
hatMargin.businessLogic();

// Describe second strategy - mark up of sale product
const bootsMarkUp = new ContextBase(new StrategyMarkUp<Strategy>(), nikeBoots.markId, nikeBoots.buy, nikeBoots.sale);
bootsMarkUp.businessLogic();
