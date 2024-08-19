import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../CrudService/service.service';
import { SharedServiceService } from '../CrudService/shared-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  allData: any;
  constructor(private crudService: ServiceService, private route: Router, private shared: SharedServiceService) { }

  ngOnInit(): void {
    this.crudService.getAllData().subscribe(items=>{
      this.allData = items;
      console.log("items", this.allData);
    })
  }
gotoadd(){
  this.route.navigate(['adddata']);
}

deleteData(id: any){
  if(window.confirm("Do You want to delete data")){
    this.crudService.deleteImage(id).subscribe(data=>{
      console.log(data);
      
    })
    window.location.reload();
  }

}
gotoEdit(id:any){
  this.shared.setId(id);
  this.route.navigate(['/edit/', id]);
}

}
