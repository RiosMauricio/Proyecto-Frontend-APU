import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private baseURL: string = "http://localhost:3000/api/libro"

  constructor(private http: HttpClient ) { }

  getLibrosDestacados(): Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this.http.get(this.baseURL + '/destacados', options)
  }

  createLibro(libro: Libro): Observable<any> {
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(libro);
    
    return this.http.post(this.baseURL, datos, options);
  }
}
