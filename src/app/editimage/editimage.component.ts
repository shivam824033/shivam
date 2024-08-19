import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../CrudService/service.service';
import { SharedServiceService } from '../CrudService/shared-service.service';
import { CrudClass } from '../models/crud-class';

@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.component.html',
  styleUrls: ['./editimage.component.css']
})
export class EditimageComponent implements OnInit {
  

  editCrud: any;
  crudId:any;
  updatedCrud: CrudClass = new CrudClass();
  updatedata: any;
  finalimage = "";

  constructor(private shared: SharedServiceService, private crudService: ServiceService, private route: Router) { }

  ngOnInit(): void {
    
    this.crudId = this.shared.getId();
    this.crudService.getCrudById(this.crudId).subscribe(data=>{
      this.editCrud =data;
      this.finalimage = this.editCrud.image;
      
      this.updatedata = new FormGroup({
        name: new FormControl(this.editCrud.name),
        about: new FormControl(this.editCrud.about),
        image: new FormControl(this.editCrud.image)
      })
    })
    console.log(this.updatedata);
    this.updatedata = new FormGroup({
     
      name: new FormControl(""),
      about: new FormControl(""),
      image: new FormControl("")
    });

  }

  editimage(){
    this.updatedata.value.image = this.base64;
    if(this.updatedata.value.image != ""){
      this.updatedata.value.image = this.finalimage;
    }
    this.crudId = this.editCrud.id;
    this.crudService.updateImage(this.crudId, this.updatedata.value).subscribe(data=>{
      console.log(data);
      this.route.navigate(['dashboard']);
  })
  }

  file: any;
  base64: any;

 onUpload(event: any){
  
  this.file = event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(this.file);
   reader.onloadend = ()=>{
       this.base64 = reader.result;
       this.finalimage = this.base64;


 }}

}
