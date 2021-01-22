import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  likes: number =0;
  likeThis(){
    this.likes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
