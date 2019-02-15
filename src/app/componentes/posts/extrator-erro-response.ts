import { HostNaoEncontradoError } from './host-nao-encontrado-error';
import { RequestInvalidoError } from './request-invalido-error';
import { AppError } from './app-error';

import { Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';

export class ExtratorDeErroDoReponse{    

    tratarErro(error: Response): Observable<Response>{

        if (error.status === 404){
            return throwError(new HostNaoEncontradoError('O host não responde. \nURL: ' + error.url, error));
        }else if (error.status === 400){
            return throwError(new RequestInvalidoError('A solicitação de remoção é inválida', error));
        }

        return throwError(new AppError('Ocorreu um erro desconhecido', error));

    }

}