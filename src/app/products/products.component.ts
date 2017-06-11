import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from './product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  constructor(private _proServ: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  addProduct(e): void {
    this._proServ.addProduct(e);
    this.getProducts()
  }

  getProducts(): void {
    this.products = this._proServ.getProducts();    
  }

  deleteProduct(idx): void {
    this._proServ.removeProduct(idx);
  }

}
