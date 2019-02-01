import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsuarioValidators{
    
    static semEspacos(controle: AbstractControl): ValidationErrors | null {

        if ((controle.value as string).indexOf(' ') >= 0){
            return { semEspacos: true };
        }

        return null;

    }

    static unico(controle: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
    
                if (controle.value === 'laudelino'){
                    resolve({ unico: true });
                }else{
                    resolve(null);
                }        
    
            }, 2000);

        });

    }

}