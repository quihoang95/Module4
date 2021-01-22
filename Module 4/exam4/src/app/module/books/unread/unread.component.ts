import { BooksService } from '../service/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unread',
  templateUrl: './unread.component.html',
  styleUrls: ['./unread.component.scss']
})
export class UnreadComponent implements OnInit {
  bookList: Book[] = [];
  validateForm!: FormGroup;
  searchValue:string;
  constructor(
    private fb: FormBuilder,
    private readonly bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name:[null,[Validators.required]]
    });
    this.bookService.getAll$(false).subscribe((res:any)=> this.bookList = res)
  }
  readBook(id: number) {
    this.bookService.patch(id,true).subscribe(
      res=> {
        this.bookList = this.bookList.filter(book=>book.id !== id)
      }
    )
  }
  submitForm(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.invalid)
    return
    this.addBook();
    this.validateForm.reset();
  }
  addBook(){
    const {value} = this.validateForm;
    value['read'] = 'false';
    this.bookService.create(value).subscribe(
      res=> {
        this.bookService.getAll$(false).subscribe(
          res=> {
            this.bookList = res
          }
        )
      }
    )
  }
}
