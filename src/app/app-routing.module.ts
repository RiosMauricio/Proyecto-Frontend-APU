import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibroComponent } from './components/libro/libro.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';

const routes: Routes = [
  {path: 'libro', component: LibroComponent},
  {path: 'libro-form', component: LibroFormComponent},
  {path: 'divisas-form', component: DivisasFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
