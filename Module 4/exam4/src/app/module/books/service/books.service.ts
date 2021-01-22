import { Book } from '../../../shared/model/book.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/books/';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  getAll$(read: boolean): Observable<any> {
    const status = read ? 'true' : 'false';
    return this.http.get(API + '?read=' + status);
  }
  create(data: Book): Observable<any> {
    return this.http.post(API, data);
  }
  patch(id: number, read: boolean): Observable<any> {
    return this.http.patch(API + id, { read });
  }
}
