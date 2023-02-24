

import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
    template: `
        <h1> la base es : {{ base }}</h1>

        <button (click)=" acumular(base);"> +{{ base }}</button>
        <span> {{ resultado }} </span>
        <button (click)=" acumular(-base);">-{{ base }}</button>
    `,
  styleUrls: ['../../app.component.css']
})
export class ContadorComponent {
  title: string = 'contador app';
  resultado : number= 3;

  base : number = 5;
  acumular(valor : number){
    this.resultado += valor;
  }
}


