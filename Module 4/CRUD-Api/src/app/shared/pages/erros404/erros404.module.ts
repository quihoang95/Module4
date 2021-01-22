import { Erros404RoutingModule } from './erros404-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Erros404Component } from './erros404.component';

@NgModule({
  imports: [
    CommonModule,
    Erros404RoutingModule
  ],
  declarations: [Erros404Component]
})
export class Erros404Module { }
