import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person.model';

// const mockPersons: Person[] = [
//   {
//     id: 1,
//     name: 'John Black',
//     age: 32,
//     address: 'New York No. 1 Lake Park'
//   },
//   {
//     id: 2,
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park'
//   },
//   {
//     id: 3,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park'
//   }
// ];

const PERSONS_LS_KEY = "PERSONS";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private dataSubject: BehaviorSubject<Person[]> = new BehaviorSubject([]);
  private data: Person[] = [];
  constructor() {
    const storedListJSON = localStorage.getItem(PERSONS_LS_KEY);
    const storedList = storedListJSON ? JSON.parse(storedListJSON) : [];

    this.dataSubject.next(storedList);
  }

  getAll$(): Observable<Person[]> {
    return this.dataSubject.asObservable();
  }

  getById(personId: number): Person {
    const person = this.dataSubject.value.find(p => p.id === personId);

    if (person) {
      return { ...person };
    }

    return null;
  }

  add(person: Person): void {
    // create new Person from credentials
    const newPerson: Person = {
      ...person,
      id: this.dataSubject.value.length + 1
    };

    // get current persons from subject
    const currentList = this.dataSubject.value;

    // push new person into person list
    currentList.push(newPerson);

    // next new value into stream
    this.dataSubject.next(currentList);

    // Store into Local Storage
    this.updateStoredList(currentList);
  }

  updateStoredList(currentList: Person[]) {
    localStorage.setItem(PERSONS_LS_KEY, JSON.stringify(currentList));
  }

  edit(personId: number, person: Person): Person {
    // Find index of target object
    const indexPerson = this.dataSubject.value.findIndex(p => p.id == personId);

    // Check if not existed, return null
    if (indexPerson < 0)
      return null;

    // Declare new object
    const data: Person = {
      ...person,
      id: personId
    };

    // Get list person from stream
    const currentList = this.dataSubject.value;

    // Assign Target Object
    currentList[indexPerson] = data;

    this.dataSubject.next(currentList);

    // Store into Local Storage
    this.updateStoredList(currentList);

    return person;
  }

  remove(personId: number): void {
    // Get list person from stream
    let currentList = this.dataSubject.value;

    currentList = currentList.filter(p => p.id !== personId);

    // Store into Local Storage
    this.updateStoredList(currentList);

    this.dataSubject.next(currentList);
  }
}
