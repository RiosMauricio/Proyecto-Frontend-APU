import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion'; 
import { Divisas } from 'src/app/models/divisas'; 
import { DivisasService } from 'src/app/services/divisas.service';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-divisas-form',
  templateUrl: './divisas-form.component.html',
  styleUrls: ['./divisas-form.component.css']
})
export class DivisasFormComponent implements OnInit {
  habilitar: boolean = false;
  conversion!: Divisas; 
  cant!: number; 
  desde!: string; 
  hacia!: string; 
  resultado!: string; 
  
  transaccion = new Transaccion; 
  constructor(private divisasService: DivisasService) { 
    this.transaccion = new Transaccion();
    this.conversion = new Divisas(); 
    this.transaccion.tasaConversion = 1;
  }

  ngOnInit(): void {
  }

  convertirGuardar()
  {
    console.log(this.cant, this.desde, this.hacia)
    this.divisasService.convertirMoneda(this.cant, this.desde, this.hacia).subscribe((result =>
      { this.conversion = result;
        this.resultado = this.conversion.result
        this.transaccion.monedaOrigen = this.desde; 
        this.transaccion.monedaDestino = this.hacia; 
        this.transaccion.cantidadOrigen = this.cant; 
        this.transaccion.cantidadDestino = this.conversion.result;
        this.divisasService.createTransaccion(this.transaccion).subscribe((data) =>{
        console.log(data);
    })
      })); 
  }

  habilitarBoton(){
    if (this.desde && this.hacia && this.transaccion.emailCliente && this.cant > 0){
      this.habilitar = true; 
    }
  }

}
