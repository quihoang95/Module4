import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-to-read',
  templateUrl: './list-to-read.component.html',
  styleUrls: ['./list-to-read.component.scss'],
})
export class ListToReadComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private readonly bookService: BooksService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe((res) => (this.books = res));
  }
  back() {
    return this.location.back();
  }
}
