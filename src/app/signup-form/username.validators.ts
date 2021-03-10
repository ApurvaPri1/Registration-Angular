import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidators{
    static cannotContainspace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0 )
        return { cannotContainspace: true};

        return null; 
    }

    static shouldbeunique(control: AbstractControl): ValidationErrors | null {
        setTimeout(() => {
            if(control.value === 'apurva')
            return { shouldbeunique: true } 
            return null
        }, 2000);
        return null
    }
    
}
