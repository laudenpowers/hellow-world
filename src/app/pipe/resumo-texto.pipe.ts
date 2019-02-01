import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'resumoTexto'
})
export class ResumoDeTextoPipe implements PipeTransform{

    transform(value: string, limite?: number){

        if (!value){
            return null;
        }

        let limiteReal: number = (limite) ? limite : 50;

        return value.substr(0, limiteReal) + '...';

    }

}