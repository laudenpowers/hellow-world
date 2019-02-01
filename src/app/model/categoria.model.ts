export class Categoria{

    constructor(private _codigo: number, private _descricao: string){

    }

    get codigo(): number{
        return this._codigo;
    }

    set codigo(novoValor: number){
        this._codigo = novoValor;
    }

    get descricao(): string{
        return this._descricao;
    }

    set descricao(novoValor: string){
        this._descricao = novoValor;
    }

}