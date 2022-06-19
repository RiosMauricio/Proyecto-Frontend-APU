import { Persona } from "./persona";

export class Pasaje {
    _id!: string; 
    precioPasaje!: number; 
    categoriaPasajero!: string; 
    fechaCompra!: Date; 
    pasajero!: Persona; 
}
