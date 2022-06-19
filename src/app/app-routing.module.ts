import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibroComponent } from './components/libro/libro.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { PasajeFormComponent } from './components/pasaje-form/pasaje-form.component';
import { PasajeComponent } from './components/pasaje/pasaje.component';


const routes: Routes = [
  {path: 'libro', component: LibroComponent},
  {path: 'libro-form', component: LibroFormComponent},
  {path: 'divisas-form', component: DivisasFormComponent},
  {path: 'divisas', component: DivisasComponent},
  {path: 'pasajes-form', component: PasajeFormComponent},
  {path: 'pasajes', component: PasajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
