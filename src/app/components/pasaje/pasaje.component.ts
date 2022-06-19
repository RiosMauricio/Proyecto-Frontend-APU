import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona'; 
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {
  cate!: string; 
  h1: boolean = false; h2: boolean = false; h3: boolean = true; h4: boolean = false;
  pasaje = new Pasaje; 
  persona = new Persona; 
  nom!: string; 
  personas: Array<Persona>=[]; 
  pasajes: Array<Pasaje>=[];
  pasajesFiltrados: Array<Pasaje>=[]; 

  constructor(private pasajeService:PasajeService) {
    this.pasaje = new Pasaje();
    this.persona = new Persona();
    this.personas = new Array<Persona>();
    this.pasajeService.getPersonas().subscribe((result: Array<Persona>)=>{
      Object.assign(this.personas, result); 
    });
    this.pasajeService.getPasajes().subscribe((result)=>{
      Object.assign(this.pasajes, result) 
    })
    console.log(this.pasajes);
  }

  ngOnInit(): void {
  }

  habilitarFiltros(){
    this.h1= true; 
  }

  filtrarPasajes(){
    this.pasajeService.getPasaje(this.cate).subscribe((result)=>{
      Object.assign(this.pasajesFiltrados, result); 
      console.log(this.pasajesFiltrados)
    })
    this.h2=true; this.h3=false
  }

  eliminarPasaje(pasaje: Pasaje){
    this.pasajeService.deletePasaje(pasaje).subscribe((result)=>{
      console.log(result)
    })
  }

  seleccionarPasaje(pasaje:Pasaje)
  {
    this.pasaje = pasaje; 
    console.log(this.pasaje); 
    this.h4 = true; 
    this.h3 = false;
  }

  editarPasaje(){
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
    if(this.pasaje.categoriaPasajero == 'A'){
      this.pasaje.precioPasaje = this.pasaje.precioPasaje;
    }
    if(this.pasaje.categoriaPasajero == 'J'){
      this.pasaje.precioPasaje = this.pasaje.precioPasaje-((this.pasaje.precioPasaje*50)/100);
    }  
    if(this.pasaje.categoriaPasajero == 'M'){
      this.pasaje.precioPasaje = this.pasaje.precioPasaje-((this.pasaje.precioPasaje*25)/100);
    }
    this.pasajeService.editPasaje(this.pasaje).subscribe((data) => {
      console.log(data);})
  }

}
