import { AwesomeService } from './../service/awesome.service';
import { Awesomes } from './../shared/model/awesomes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesomes',
  templateUrl: './awesomes.component.html',
  styleUrls: ['./awesomes.component.scss']
})
export class AwesomesComponent implements OnInit {
  awesomes: Awesomes[]=[];
  constructor(
    private readonly awesomeService:AwesomeService
  ) { }

  ngOnInit() {
    this.awesomeService.getAll$().subscribe(res=>this.awesomes=res)

  }

}
