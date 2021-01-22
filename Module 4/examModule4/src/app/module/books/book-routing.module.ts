import { AddABookComponent } from './add-a-book/add-a-book.component';
import { BooksReadingComponent } from './books-reading/books-reading.component';
import { ListToReadComponent } from './list-to-read/list-to-read.component';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: ListToReadComponent,
      },
      {
        path: 'read',
        component: BooksReadingComponent,
      },
      {
        path: 'create',
        component: AddABookComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
