import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person.model';

const PERSONS_LS_KEY = 'PERSONS';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private dataSubject: BehaviorSubject<Person[]> = new BehaviorSubject([]);
  private data: Person[] = [];

  constructor() {
    const storedListStr = localStorage.getItem(PERSONS_LS_KEY);
    const storedList = storedListStr? JSON.parse(storedListStr) : [];

    this.dataSubject.next(storedList);
  }

  getAll$(): Observable<Person[]> {
    return this.dataSubject.asObservable();
  }

  getById(personId: number): Person {
    const person = this.dataSubject.value.find((p) => p.id === personId);

    if (person) {
      return { ...person };
    }
    return null;
  }

  add(person: Person): void {
    const newPerson: Person = {
      ...person,
      id: this.dataSubject.value.length + 1,
    };

    const currentList = this.dataSubject.value;

    currentList.push(newPerson);

    this.dataSubject.next(currentList);

    this.updateStorageList(currentList);
  }

  updateStorageList(currentList: Person[]) {
    localStorage.setItem(PERSONS_LS_KEY, JSON.stringify(currentList));
  }

  edit(personId: number, person: Person): Person {
    const indexPerson = this.dataSubject.value.findIndex(
      (p) => (p.id == personId)
    );
    if (indexPerson < 0) return null;
    const data: Person = {
      ...person,
      id: personId,
    };
    const currentList = this.dataSubject.value;
    currentList[indexPerson] = data;
    this.dataSubject.next(currentList);
    this.updateStorageList(currentList);
    return person;
  }
  remove(personId: number):void{
    let currentList = this.dataSubject.value;

    currentList = currentList.filter(p=> p.id !== personId);

    this.updateStorageList(currentList);
    this.dataSubject.next(currentList);
  }
}
