import { Component } from '@angular/core';
import { ProductService } from "./commons/services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor(
    public $product: ProductService,
  ) {
  }

  addProduct() {
    this.$product.products = [
      ...this.$product.products,
      { name: 'Product 3', price: 300 }
    ]
  }
}
