import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient) { }

  getBooksSERVICE(): Observable<any>{
return this.http.get("http://localhost:3000/api/get")

  }

  addBooksSERVICE(data :any): Observable<any>{
    return this.http.post("http://localhost:3000/api/add",data)
    
      }

      deleteBooksSERVICE(id :any): Observable<any>{
        console.log(id)
       // console.log("data",data)
        return this.http.delete("http://localhost:3000/api/delete/" +id.id)
        
          }
          
}
