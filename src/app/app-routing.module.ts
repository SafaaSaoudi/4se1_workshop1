import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  {path:'',redirectTo:'residences',pathMatch:'full'},
  {path:'residences',component:ResidencesComponent},
  {path:'addResidence', component:AddResidenceComponent},
  {path:'apartments/:idR', component:ApartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
