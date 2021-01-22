import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../shared/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() products!: CartItem[];
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeProduct(id: string): void {
    const index = this.products.findIndex((e) => e.product.id == id);
    this.products.splice(index, 1);
  }
  updateQuantity(element: { value: any }) {
    console.log(element.value);
  }
}
