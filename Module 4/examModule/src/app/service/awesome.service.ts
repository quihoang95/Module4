import { Awesomes } from './../shared/model/awesomes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/awesomes/';

@Injectable({
  providedIn: 'root',
})
export class AwesomeService {
  constructor(private http: HttpClient) {}
  getAll$(): Observable<any> {
    return this.http.get(API);
  }
  getById(id: number): Observable<any> {
    return this.http.get(API + id);
  }
  create(data: Awesomes): Observable<any> {
    return this.http.post(API, data);
  }
  update(id: number, data): Observable<any> {
    return this.http.put(API + id, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(API + id);
  }
}
