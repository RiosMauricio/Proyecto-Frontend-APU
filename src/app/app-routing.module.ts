import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibroComponent } from './components/libro/libro.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';

const routes: Routes = [
  {path: 'libro', component: LibroComponent},
  {path: 'libro-form', component: LibroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
