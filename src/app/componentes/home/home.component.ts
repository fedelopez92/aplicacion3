import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 titulo="hola angular";
 btn="enviar";
 nombre="batman";
 lista = [{nombre:"fede", edad:"26"}, {nombre:"mario", edad:"18"}, {nombre:"marcelo", edad:"20"}, {nombre:"facundo", edad:"28"}];

  constructor() { }

  enviar(e){
    console.log("enviar", e);
    console.log(this.nombre);//cada vez que se llama a una variable hay que poner this
  }

  ngOnInit() {
  }

}
