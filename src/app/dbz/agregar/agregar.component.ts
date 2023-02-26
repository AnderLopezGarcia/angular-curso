import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService : DbzService){}

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){return;}
    
    this.DbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {nombre: '', poder: 0}

  }
}
