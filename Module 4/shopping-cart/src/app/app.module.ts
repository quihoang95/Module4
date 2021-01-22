import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './cart-header/header.component';
import { CartSummnaryComponent } from './cart-summnary/cart-summnary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCodeComponent } from './product-code/product-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartSummnaryComponent,
    ProductListComponent,
    ProductCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
