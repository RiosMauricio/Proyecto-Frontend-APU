import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibroComponent } from './components/libro/libro.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';
import { DivisasComponent } from './components/divisas/divisas.component';


@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    HeaderComponent, 
    FooterComponent, LibroFormComponent, DivisasFormComponent, DivisasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
