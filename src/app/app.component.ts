import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'contador app';
  resultado : number= 3;

  base : number = 5;
  acumular(valor : number){
    this.resultado += valor;
  }
}


