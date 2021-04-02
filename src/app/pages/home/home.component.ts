import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre:string='Nombre del usuario';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombre = "Pedro";
    
    claro que falla es aposta
    esto falla mucho
    
    
    meto mas mierda
  }

}
