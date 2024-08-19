import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddimageComponent } from './addimage/addimage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditimageComponent } from './editimage/editimage.component';
import { HomeComponent } from './home/home.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "dashboard", component: DashboardComponent},
  {path: "adddata", component: AddimageComponent},
  {path: "edit/:id", component: EditimageComponent},
  {path : "clientForm", component: ClientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
