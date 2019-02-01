import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CursosService{

    listarCursos(): Array<string>{
        return ['Curso 1', 'Curso 2', 'Curso 3'];
    }

}