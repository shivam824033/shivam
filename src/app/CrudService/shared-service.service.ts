import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
   
  id: any;
  constructor() { }
 
setId(idNum : Number){
  this.id = idNum;
}
getId(){
  return this.id;
}
}
