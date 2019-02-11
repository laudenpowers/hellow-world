export class Post{

    constructor(private _id?: string, private _title?: string){

    }

    get id(): string{
        return this._id;
    }

    set id(novoValor: string){
        this._id = novoValor;
    }

    get title(): string{
        return this._title;
    }

    set title(novoValor: string){
        this._title = novoValor;
    }

}