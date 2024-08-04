type TUser = {
  id: number;
  name: string;
  age: string;
  profile: {
    image: string;
    desc?: string;
  };
};
// --------------------------------------------------------
// task2
// -----------------------------------------------------
type TProduct = {
  id: number;
  title: string;
  descrption?: string;
  amount: number;
  value: number;
};

interface IProductDto {
  title: string;
  descrption?: string;
  amount: number;
  value: number;
}
type TUpdateDto = {
  title?: string;
  descrption?: string;
  amount?: number;
  value?: number;
};

interface Iproduct {
  create(Dto: IProductDto): void;
  delete(id: number): void;
  update(id: number, updatedData: TUpdateDto): void;
  find(id: number): TProduct;
}

class Product implements Iproduct {
  create(Dto: IProductDto): void {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  update(id: number, updatedData: TUpdateDto): void {
    throw new Error("Method not implemented.");
  }
  find(id: number): TProduct {
    throw new Error("Method not implemented.");
  }
}
