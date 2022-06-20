import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro'
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {
  habilitar: boolean = false;
  libro = new Libro; 
  constructor(private libroService:LibroService) { 
    this.libro = new Libro();
  }

  ngOnInit(): void {
  }

  crearLibro(){
    this.libroService.createLibro(this.libro).subscribe((result: any)=>{
      console.log(result);
    })
  }

  habilitarBoton(){
    if (this.libro.titulo && this.libro.descripcion && this.libro.imagen && this.libro.stock > 0 && this.libro.destacado){
      this.habilitar = true; 
    }
  }

}
