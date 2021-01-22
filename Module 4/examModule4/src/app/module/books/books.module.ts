import { BooksReadingComponent } from './books-reading/books-reading.component';
import { AddABookComponent } from './add-a-book/add-a-book.component';
import { BookRoutingModule } from './book-routing.module';
import { ListToReadComponent } from './list-to-read/list-to-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    NzTableModule,
    NzButtonModule,
    NzFormModule


  ],
  declarations: [BooksComponent,ListToReadComponent,BooksReadingComponent,AddABookComponent]
})
export class BooksModule { }
