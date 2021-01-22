import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Book } from './../../../../book';
import { DataService } from './../../serve/data.service';

@Component({
  selector: 'app-list-unread',
  templateUrl: './list-unread.component.html',
  styleUrls: ['./list-unread.component.css']
})
export class ListUnreadComponent implements OnInit {
   books:any;
  book = new Book();
  constructor(private route:ActivatedRoute, private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.getBookData();
  }
  getBookData(){
    this.dataService.getData(true).subscribe(res=>{
      this.books=res;
    })
  }
  insertBookData(){
    this.book.read=true;
    this.dataService.insertData(this.book).subscribe(res=>{
       this.getBookData();
     });
  }
  deleteBookData(id){
    this.dataService.deleteData(id).subscribe(res=>{
      this.getBookData();
    })
  }
  read(id){
    this.book.read=false;
    this.dataService.updateData(id,this.book).subscribe(res=>{
      this.getBookData();
    })
  }

}
