import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplicacion3';//crea una variable. Al inicializar con un string va a detectar que es un string
  public nombre : string;//si no se inicializa se tiene que poner el tipo (string)
  private numero : number;//no hace falta poner public o private. si no ponemos nada va a ser public
}
