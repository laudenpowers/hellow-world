import { AppError } from './app-error';
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{

    handleError(error: AppError){

        if (error.erroOriginal.status != 404 && error.erroOriginal.status != 400){
            alert('Um erro inesperado ocorreu');
        }else{
            alert(error.msgPrincipal);
        }
        console.log(error);

    }

}