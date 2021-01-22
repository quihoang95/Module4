import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/shared/model/book.model';
import { Observable } from 'rxjs';

const API = environment.domain + 'books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(API);
  }
  getById(id:number):Observable<any>{
    return this.http.get(API+id);
  }
  create(data: Book):Observable<any>{
    return this.http.post(API,data);
  }
  // update(id:number,data){
  //   return this.http.put(API+id,data);
  // }
}
