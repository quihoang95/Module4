import { Book } from './../../../../book';
import { DataService } from './../../serve/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-list-read',
  templateUrl: './list-read.component.html',
  styleUrls: ['./list-read.component.css']
})
export class ListReadComponent implements OnInit {
  books:any;
  book = new Book();
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor(private route:ActivatedRoute, private router:Router,private dataService:DataService) {}

  ngOnInit(): void {
     this.getBookData();
  }
  getBookData(){
    this.dataService.getData(false).subscribe(res=>{
      this.books=res;
    })
  }
  insertBookData(){
    this.book.read=false;
    this.dataService.insertData(this.book).subscribe(res=>{
       this.getBookData();
       this.form.reset();
     });
  }
  deleteBookData(id){
    this.dataService.deleteData(id).subscribe(res=>{
      this.getBookData();
    })
  }
  unread(id){
    this.book.read=true;
    this.dataService.updateData(id,this.book).subscribe(res=>{
      this.getBookData();
    })
  }

}
