import { Category } from "./CategoryDto";

export class Product {
  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.price = 0;
    this.images = "";
    this.quantity = 0;
    this.categoryId = 0;
    this.category = {
      id: 0,
      name: "",
    };
  }
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
  quantity: number;
  categoryId: number;
  category: Category;
}
