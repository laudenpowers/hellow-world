export class AppError{
        
    constructor(private _msgPrincipal?: string, private _erroOriginal?: any){

    }

    get msgPrincipal(): string{
        return this._msgPrincipal;
    }

    get erroOriginal(): any{
        return this._erroOriginal;
    }

}