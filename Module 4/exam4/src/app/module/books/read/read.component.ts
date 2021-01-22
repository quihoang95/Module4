import { BooksService } from './../service/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  bookList: Book[] = [];
  constructor(private readonly bookService: BooksService) {}

  ngOnInit() {
    this.bookService.getAll$(true).subscribe((res: any) => {
      this.bookList = res;
    });
  }
  unreadBook(id: number) {
    this.bookService.patch(id, false).subscribe(
      (res) => {
      this.bookList = this.bookList.filter((book) => book.id !== id);
    });
  }
}
