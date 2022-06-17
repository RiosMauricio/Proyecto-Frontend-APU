import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  private baseURL: string = "http://localhost:3000/api/transaccion";

  constructor(private _http: HttpClient) {}

  public convertirMoneda(cantidad: number, de: string, a: string): Observable<any>{
    const options = {
      method: 'POST',
      url: 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'dc49882d15mshc88c616257d7bbdp1a366ajsn2ed4cb5457ba',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      },
    };
    
    const precios = new HttpParams()
    .set("from-value", cantidad) 
    .set("from-type", de)
    .set("to-type", a)

    return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', precios, options);
  }

  createTransaccion(transaccion: Transaccion): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(transaccion);
    
    return this._http.post(this.baseURL, datos, options);
  }
}
