import { Component } from '@angular/core';
import { Residence } from '../core/Models/residence';
import { ResidenceService } from '../core/Services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  residence:Residence= {id:5,"name": "Nouvelle Rsidence","address":"Ariana","image":"../../assets/images/R4.jpg"};

  constructor(private resServ:ResidenceService, private R: Router){}


  ajoutResidence(){
    this.resServ.addResidence(this.residence).subscribe( 
    (x) => {
      alert("Residence"+ x.name + " ajoutée avec succès");
      this.R.navigateByUrl("residences");
    }, 
    
    (err) => alert("Erreur lors de l'ajout"), 

    () => alert("Ajout terminé")
    );
  }
}
