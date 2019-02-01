export class Curso{

    constructor(private _codigo: string, private _descricao: string){

    }

    get codigo(): string{
        return this._codigo;
    }

    get descricao(): string{
        return this._descricao;
    }

}