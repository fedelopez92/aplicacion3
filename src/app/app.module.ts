import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

import { FormsModule } from '@angular/forms';//importamos el modulo para que ande el ngModel de home.component.html

@NgModule({
  declarations: [ //se ponen los componentes importados
    AppComponent,
    HomeComponent
  ],
  imports: [ //se ponen los modulos importados
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//se pone el componente con el que se quiere iniciar
})
export class AppModule { }
