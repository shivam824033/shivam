import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {

  @Output() valueChanged = new EventEmitter<any>();

  @Input() name2 :string | undefined;

  clientObject = {
    name : '',
    company :''
   } 

  constructor(private route: Router){}

  clientFlag :boolean =true;
  client: any = {
    clientName: 'TCS',
    company: 'Wipro',
    title: '',
    department: '',
    preferredContactMethod: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    companyWebsite: '',
    companyLogo: '',
    workingHours: '',
    workingDays: '',
    billingCycle: '',
    additionalInfo: ''
  };

  departments = ['HR', 'Finance', 'IT', 'Marketing', 'Sales'];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.client.companyLogo = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    console.log('Client Details:', this.clientObject);
    this.valueChanged.emit(this.clientObject);
  //  this.clientFlag =false;
   // this.route.navigate(['']);
  }
}
