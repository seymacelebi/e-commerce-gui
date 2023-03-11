export class Product {
  constructor() {
    this.productId = 0;
    this.title = "";
    this.description = "";
    this.price = 0;
    this.image = "";
    this.quantity = 1;
    this.categoryId = 0;
  }
  productId: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  categoryId: number;
}
