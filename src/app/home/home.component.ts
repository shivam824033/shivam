import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

 object = {
  name : '',
  company :''
 } 

 name1 =''

  ngOnInit(): void {
  }

  parentMethod(name:string, company:string){

    console.log("name : " + name)
    console.log("name : " + name)
    this.name1=name;

  }

  dummyParent(obj:any){
    console.log("object : " + obj.name)
    this.object=obj;
    this.parentMethod(this.object.name, this.object.company);
  }

}
