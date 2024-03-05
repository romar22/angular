import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
  ]

  constructor(
    // private service1: Service1,
  ) { }

  createProduct() {

  }

  getAllProductPrice() {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }
}
