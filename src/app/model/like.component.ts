export class LikeComponent{

    constructor(private _totalDeLikes: number, private _isSelecionado: boolean){

    }

    aoClicar(){

        this._totalDeLikes += (this._isSelecionado) ? -1 : 1;

        this._isSelecionado = !this._isSelecionado;

    }

    get totalDeLikes(){
        return this._totalDeLikes;
    }

    get isSelecionado(){
        return this._isSelecionado;
    }

}