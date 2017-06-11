import { Injectable } from '@angular/core';

@Injectable()
class ProductService {
  private _products: Array<Product> = [
    new Product('Keyboard', 'Corsair', 129.99, 500),
    new Product('Mouse', 'Corsair', 89.99, 500),
    new Product('Keyboard', 'Razer', 159.99, 500),
    new Product('Monitor', 'Asus', 1299.99, 500),
  ]
  constructor() { }; 

  getProducts() { return this._products; }
  addProduct(prod: Product) { this._products.push(prod); }
  removeProduct(idx: number) :void { this._products.splice(idx, 1); }
}

class Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(name: string, description: string, price: number, quantity: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateQuantity(num: number) { this.quantity += num; }
}

export { ProductService, Product }
