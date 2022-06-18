import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion'; 
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {
  transacciones: Array<Transaccion>=[]; 
  transaccionesFiltradas: Array<Transaccion>=[];
  i1: boolean = false; i2: boolean = false;i3: boolean = false; i4: boolean = false;
  moOrigen!: string; 
  moDestino!: string; 
  transaccion: Transaccion = new Transaccion();

  constructor(private divisasService: DivisasService){
    this.i3 = true;
    this.transacciones = new Array<Transaccion>(); 
    this.divisasService.getTransacciones().subscribe((result)=> {
      Object.assign(this.transacciones, result); 
    })
    
  }

  ngOnInit(): void {
  }

  habilitarFiltros(){
    this.i1 = true;
  }

  filtrarTransacciones(){
    this.i2 = true;
    this.i3 = false;
    this.i4=true;
    this.divisasService.getTransaccionesOrigenDestino(this.moOrigen, this.moDestino).subscribe((data)=>
    {Object.assign(this.transaccionesFiltradas, data)
    console.log(this.transaccionesFiltradas)})
  }



}
