import { HostNaoEncontradoError } from './host-nao-encontrado-error';
import { RequestInvalidoError } from './request-invalido-error';
import { AppError } from './app-error';

import { Response } from '@angular/http';

export class ExtratorDeErroDoReponse{

    extrairErroDo(responseDeErro: Response): AppError{

        if (responseDeErro.status === 404){
            return new HostNaoEncontradoError('O host não responde. \nURL: ' + responseDeErro.url, responseDeErro);
        }else if (responseDeErro.status === 400){
            return new RequestInvalidoError('A solicitação de remoção é inválida', responseDeErro);
        }

        return new AppError('Ocorreu um erro desconhecido', responseDeErro);

    }

}