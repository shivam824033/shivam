import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudClass } from '../models/crud-class';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'observe': 'response'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  getAllData(){
    return this.http.get(`${this.baseUrl}/api/getData`, httpOptions);
  }

  addNewImage(newcrud: CrudClass){
    return this.http.post(`${this.baseUrl}/api/addData`, newcrud, httpOptions)
  }
  
  deleteImage(id: Number){
    return this.http.delete(`${this.baseUrl}/api/deleteData/${id}`, httpOptions)
  }

  getCrudById(id: Number){
    return this.http.get(`${this.baseUrl}/api/getCrudById/${id}`, httpOptions);
  }

  updateImage(id:Number, editedCrud: CrudClass){
    
    return this.http.put(`${this.baseUrl}/api/editCrud/${id}`, editedCrud, httpOptions);
  }
 
}
