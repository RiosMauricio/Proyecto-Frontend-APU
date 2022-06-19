import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro'
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros: Array<Libro>=[]; 
  indice:number=0; 
  libro:Libro = new Libro(); 
  
  constructor(private libroService:LibroService) { 
                  this.libros = new Array<Libro>(); 
                  this.libroService.getLibrosDestacados().subscribe((result)=> {
                    Object.assign(this.libros, result);
                    Object.assign(this.libro, result[this.indice])
                }); 
                this.iniciar();
              }

  iniciar(){
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }
    console.log(this.libros)
  }

  siguiente(){
    this.indice = this.indice +1;
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }
    else 
    {
      this.indice = 0; 
      this.libro = this.libros[this.indice]
    }
  }


  anterior(){
    if(this.indice == 0)
    {
      this.indice=this.libros.length - 1;
      this.libro = this.libros[this.indice];
    }
    else{
      this.indice = this.indice -1;
       if (this.indice < this.libros.length){
          this.libro = this.libros[this.indice];
        }
      }
  }

  ngOnInit(): void {
    console.log(this.libros)
  }

}