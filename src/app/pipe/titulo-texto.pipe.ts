import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'tituloTexto'
})
export class TituloPipe implements PipeTransform{

    transform(value: string, args?: any){

        if (!value){
            return null
        }

        let fraseTransformada = '';

        value.split(" ").forEach(elemento => fraseTransformada += elemento.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {return a.toUpperCase();}) + " ");

        return fraseTransformada;

    }

}