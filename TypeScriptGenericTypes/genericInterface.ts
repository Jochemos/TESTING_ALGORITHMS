// Stage two: insert generic interface and fetures for added parameters types
// Interface may be defined with parameters generic types
// Exist relations between child class and parents class about implement properties

import ProductMarkUp from '../classEvolution/fifthStage';

// shape of type
type shapeType = {
  id: string
};

// implement interface for generic class
interface DataCollectionShape<Gen extends shapeType> {
  addNew(initNew: Gen): void;
  getOne(index: number): Gen;
};

class DataCollection<TypeData extends shapeType> implements DataCollectionShape<TypeData> {
  protected items: TypeData[] = [];

  addNew(initNew): void {
    this.items.push(initNew);
  };

  getOne(index): TypeData {
    return this.items[index];
  };
};

const productsData: DataCollectionShape<ProductMarkUp> = new DataCollection<ProductMarkUp>();
productsData.addNew(new ProductMarkUp('skis45982', 'Skis: Fischer Sports', 1894, 2788));
productsData.addNew(new ProductMarkUp('snowboard140222', 'Board: Burton', 652, 1234));

const SnowEquipment = productsData.getOne(0);
console.log(SnowEquipment.identyProd());
console.log(SnowEquipment.resultMargin());
console.log(SnowEquipment.resultMarkUp());
