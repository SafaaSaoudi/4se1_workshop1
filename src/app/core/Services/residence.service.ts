import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ResidenceService {


  constructor(private http:HttpClient) { }

  URL ="http://localhost:3000/residences";
  
  getAllResidences(){
    return this.http.get<Residence[]>(this.URL); 
  }

  getResidenceById(id:number){
    return this.http.get<Residence>(this.URL+"/"+id); 
  }

  addResidence(R:Residence){
    return  this.http.post<Residence>(this.URL, R);
  }

  updateResidence(id:number, R:Residence){}

  deleteResidence(id:number){}



}
