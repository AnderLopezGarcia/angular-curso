import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'goku',
            poder: 15000
        },
        {
            nombre: 'vegetta',
            poder: 7500
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {

    }
    agregarPersonaje( personaje : Personaje ){
        this._personajes.push(personaje);
    }
}