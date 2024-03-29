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

  addResidence(R:any){
    return  this.http.post(this.URL, R);
  }

  updateResidence(id:number, R:Residence){
    return this.http.put<Residence>(this.URL+"/"+id, R); 
  }

  deleteResidence(id:number){
    return this.http.delete<Residence>(this.URL+"/"+id); 
  }



}
