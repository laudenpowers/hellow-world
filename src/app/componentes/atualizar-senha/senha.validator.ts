import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class SenhaValidators{

    static deveSerValida(controle: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
    
                if (controle.value != '123'){
                    resolve({ 
                        invalida: true 
                    });
                }else{
                    resolve(null);
                }        
    
            }, 1500);

        });        

    }
    
}

export function deveCoincidir(controlName: string, matchingControlName: string) {

    return (formGroup: FormGroup) => {

        const control = formGroup.controls[controlName];

        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ 
                isNaoCoincidentes: true 
            });
        }else{
            matchingControl.setErrors(null);
        }

    }

}