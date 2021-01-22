import { Component, Input, OnInit } from '@angular/core';
import { totalmem } from 'os';

@Component({
  selector: 'app-cart-summnary',
  templateUrl: './cart-summnary.component.html'
})
export class CartSummnaryComponent implements OnInit {
  @Input() subTotal!:number;
  @Input() tax!:number;
  @Input() total!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
