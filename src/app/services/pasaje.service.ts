import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  private baseURL: string = "http://localhost:3000/api/pasaje";
  private baseURL1: string = "http://localhost:3000/api/persona";

  constructor(private _http: HttpClient) { }

  createPasaje(pasaje: Pasaje): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(pasaje);

    return this._http.post(this.baseURL, datos, options)

  }

  editPasaje(id: string): Observable<any>{
    const options = {
      method: "PUT",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.put(this.baseURL +'/'+id , options)

  }

  getPasajes(): Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL, options)
  }

  getPasaje(cat: string): Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL +'/'+cat , options)
  }

  deletePasaje(id: string): Observable<any>{
    const options = {
      method: "DELETE",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.delete(this.baseURL +'/'+ id , options);
  }

  getPersonas(): Observable <any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL1, options)
  }

}
