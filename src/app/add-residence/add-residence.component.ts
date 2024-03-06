import { Component } from '@angular/core';
import { Residence } from '../core/Models/residence';
import { ResidenceService } from '../core/Services/residence.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  //residence:Residence= {id:5,"name": "Nouvelle Rsidence","address":"Ariana","image":"../../assets/images/R4.jpg"};

   addForm= new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl(''),
    image: new FormControl(''),
    skills:new FormArray([new FormControl('')])
   })





  constructor(private resServ:ResidenceService, private R: Router){}


  ajoutResidence(){
    this.resServ.addResidence(this.addForm.value).subscribe( 
    (x) => {
      alert("Residence ajoutée avec succès");
      this.R.navigateByUrl("residences");
    }, 
    
    (err) => alert("Erreur lors de l'ajout"), 

    () => alert("Ajout terminé")
    );
    //console.log(this.addForm);
    
  }

  get name(){
    return this.addForm.get('name');
  }
  get addresse(){
    return this.addForm.get('address');
  }

  get image(){
    return this.addForm.get('image');
  }

}
