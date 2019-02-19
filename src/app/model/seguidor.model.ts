export class Seguidor{

    constructor(private _login?: string, private _avatar_url?: string, private _url?: string){

    }

    get login(): string{
        return this._login;
    }

    set login(novoValor: string){
        this._login = novoValor;
    }

    get avatar_url(): string{
        return this._avatar_url;
    }

    set avatar_url(novoValor: string){
        this._avatar_url = novoValor;
    }

    get url(): string{
        return this._url;        
    }

    set url(novoValor: string){
        this._url = novoValor;
    }

}