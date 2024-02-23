import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    ApartmentsComponent,
    AddResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
