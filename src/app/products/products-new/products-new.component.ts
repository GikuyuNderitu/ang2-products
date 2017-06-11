import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.service'

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.sass']
})
export class ProductsNewComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: number;
  quantity: number;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  newProduct() {
    const product: Product = new Product(this.name, this.description, this.price, this.quantity);
    this.addProduct.emit(product);
    this.clearFields();
  }
  
  clearFields() {
    this.name = '';
    this.description = '';
    this.price = 0;
    this.quantity = 0;
  }



}
