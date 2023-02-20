export class ProductDto {
  constructor() {
    this.productid = 0;
    this.title = "";
    this.description = "";
    this.price = "";
    this.url = "";
    this.quantity = 1;
    this.categoryId = 0;
  }
  productid: number;
  title: string;
  description: string;
  price: string;
  url: string;
  quantity: number;
  categoryId: number;
}
