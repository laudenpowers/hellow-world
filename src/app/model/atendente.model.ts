export class Atendente{

    constructor(private _codigo: number, private _nomeCompleto: string){

    }

    get codigo(){
        return this._codigo;
    }

    get nomeCompleto(){
        return this._nomeCompleto;
    }

}