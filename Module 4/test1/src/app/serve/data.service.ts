import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API= "http://localhost:3000/books/";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getData(read:boolean){
    return this.httpClient.get(API+"?read="+read);
  }
  insertData(data){
    return this.httpClient.post(API, data);
  }
  updateData(id, data){
    return this.httpClient.patch(API+id, data);
  }
  deleteData(id){
    return this.httpClient.delete(API+id);
  }
  getEmployeeById(id){
    return this.httpClient.get(API+id);
  }
}
