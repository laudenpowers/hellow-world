import { Categoria } from 'src/app/model/categoria.model';

export class CursoNovo{

    constructor(private _nome: string, private _categoria: Categoria, private _isDevolver: boolean){

    }

    get nome(): string{
        return this._nome;
    }

    set nome(novoValor: string){
        this._nome = novoValor;
    }

    get categoria(): Categoria{
        return this._categoria;
    }

    set categoria(novoValor: Categoria){
        this._categoria = novoValor;
    }

    get isDevolver(): boolean{
        return this._isDevolver;
    }

    set isDevolver(novoValor: boolean){
        this._isDevolver = novoValor;
    }

}