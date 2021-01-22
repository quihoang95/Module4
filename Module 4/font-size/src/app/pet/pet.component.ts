import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  petName = 'puppie';
  petImage ='https://thehappypuppysite.com/wp-content/uploads/2018/07/white-pomeranian-long.jpg'

  constructor() { }

  ngOnInit() {
  }
  updateName(name){
    this.petName = name;
  }
  updateImage(image){
    this.petImage = image;
  }

}
