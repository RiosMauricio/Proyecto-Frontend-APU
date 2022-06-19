import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona'; 
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css']
})
export class PasajeFormComponent implements OnInit {
  pasaje = new Pasaje; 
  pasajes: Array<Pasaje>=[]; 
  persona = new Persona; 
  personas: Array<Persona>=[]; 

  nom!: string;
  precio!: number; 
  categoria!: string; 
  fechaC!: Date; 
  
  constructor(private pasajeService:PasajeService) { 
    this.pasaje = new Pasaje(); 
    this.persona = new Persona(); 
    
    this.pasajeService.getPersonas().subscribe((result: Array<Persona>)=>{
      Object.assign(this.personas, result); 
    })
  }

  ngOnInit(): void {
    
     
  }

  crearPasaje()
  {
    var i; 
    try{
      for(i=0; i<=this.personas.length; i++)
      {
        if (this.nom==this.personas[i].nombre){
          this.persona=this.personas[i]
          Object.assign(this.persona, this.personas[i])
        }
      }
    }catch(e){
      console.log("Funciona Igual")
    }
    console.log(this.persona)

    this.pasaje.precioPasaje = this.precio; 
    this.pasaje.categoriaPasajero = this.categoria; 
    this.pasaje.fechaCompra = this.fechaC;
    this.pasaje.pasajero = this.persona; 

    console.log(this.pasaje); 
     this.pasajeService.createPasaje(this.pasaje).subscribe((data)=>{
     console.log(data); })
  }

 

}
