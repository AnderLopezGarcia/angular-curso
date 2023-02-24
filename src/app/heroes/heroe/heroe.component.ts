import { Component } from '@angular/core';
@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})

export class HeroeComponent{

    nombre : string = 'ironman';
    edad : number = 23;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    } 

    obtenerNombre() : string{
        //return `${this.nombre } - ${this.edad}`;
        return this.nombre + '-' + this.edad.toString();
    }
    cambiarHeroe() : void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad() : void{
        this.edad = 54;
    }
}