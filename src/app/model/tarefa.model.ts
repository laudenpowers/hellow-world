import { Atendente } from './atendente.model';
export class Tarefa{

    constructor(private _codigo: number, private _titulo: string,
            private _atendente: Atendente){

    }

    get codigo(){
        return this._codigo;
    }

    get titulo(){
        return this._titulo;
    }

    get atendente(){
        return this._atendente;
    }

}