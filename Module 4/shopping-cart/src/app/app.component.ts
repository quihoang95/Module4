import { Component } from '@angular/core';
import { MockProducts } from 'src/mock-data/products.mock';
import { CartItem } from './shared/model';
import { Product } from './shared/model/product.model';

const mockCartItems: CartItem[] = MockProducts.map((e) => ({
  product: e,
  quantity: 1,
}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  numberItems: number = 3;
  tax: number = 10;

  cartItems: CartItem[] = mockCartItems;
  //Tính tổng tiền
  get subTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
  get total() {
    return Math.round(this.subTotal * (1 + this.tax / 100));
  }

  removeProduct(id: string): void {
    // Xóa sản phẩm
    this.cartItems = this.cartItems.filter((item) => item.product.id != id);
  }
}
