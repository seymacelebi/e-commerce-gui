export class Product {
  constructor() {
    this.productId = 0;
    this.title = "";
    this.description = "";
    this.price = 0;
    this.images = "";
    this.quantity = 1;
    this.categoryId = 0;
  }
  productId: number;
  title: string;
  description: string;
  price: number;
  images: string;
  quantity: number;
  categoryId: number;
}
