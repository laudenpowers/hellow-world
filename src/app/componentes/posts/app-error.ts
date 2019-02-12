export class AppError{
    
    constructor(private _erroOriginal?: any){

    }

    get erroOriginal(): any{
        return this._erroOriginal;
    }

}