import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'spiderman2', 'spiderman3', 'spiderman5']
  heroesBorrados: string[] = []

  borrarHeroe(){
    const aux = this.heroes.shift();
    if (aux == undefined)  {
    }else{
      this.heroesBorrados.unshift(aux);
    }
  }

}


