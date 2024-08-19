import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../CrudService/service.service';
import { CrudClass } from '../models/crud-class';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  newCrud = new CrudClass();
  constructor(private CrudService: ServiceService, private route: Router) { }

  ngOnInit(): void {
  }
  
  addimage(){
    
    this.newCrud.image = this.base64.toString();
    this.CrudService.addNewImage(this.newCrud).subscribe(data=>{
      console.log("Response", data);
      this.route.navigate(['dashboard']);
    });

  }
  
  file: any;
  base64: any;

  onUpload(event: any){

   this.file = event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(this.file);
   reader.onloadend = ()=>{
       this.base64 = reader.result;
   }}

}
