import { Component } from '@angular/core';
import { Residence } from '../core/Models/residence';
import { Apartment } from '../core/Models/apartment';
import { ResidenceService } from '../core/Services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[];
   

  listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] }
    ];

  constructor(private resServ:ResidenceService){}

  ngOnInit(){
    this.resServ.getAllResidences().subscribe( x => this.listResidences= x );
  }


}
