import { PersonService } from './../../shared/services/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss'],
})
export class ListPersonComponent implements OnInit {
  listOfData: Person[] = [];

  constructor(private readonly personService: PersonService) {}

  ngOnInit() {
    this.personService.getAll$().subscribe(
      (res) => {
        this.listOfData = res;
        console.log(res);
      },
      (err) => {},
      () => {}
    );
  }
  remove(person:Person){
    this.personService.remove(person.id);
  }
}
