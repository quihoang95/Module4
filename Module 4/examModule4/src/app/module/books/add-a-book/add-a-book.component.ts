import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-a-book',
  templateUrl: './add-a-book.component.html',
  styleUrls: ['./add-a-book.component.scss'],
})
export class AddABookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private bookService: BooksService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: [
        null,[
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2)]
      ],
    });
  }
  submitForm(){
    const book = this.bookForm.value;
    this.bookService.create(book).subscribe(res=>{
      console.log(res);
      alert("Create a book success!");
      this.router.navigateByUrl('/books')
    })
  }
  getControl(controlName: string) {
    return this.bookForm.get(controlName);
  }
  back(){
    return this.location.back();
  }
}
