import { User } from '../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.domain + 'users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(API);
  }
  getById(id: number): Observable<any> {
    return this.http.get(API + id);
  }
  create(data: User): Observable<any> {
    return this.http.post(API, data);
  }
  update(id: number, data): Observable<any> {
    return this.http.put(API + id, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(API + id);
  }
}
