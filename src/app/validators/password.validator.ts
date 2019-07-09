import { FormControl } from '@angular/forms';


/**
* Le valeur du champ est-il similaire au champ password?
*/
export function passwordMatchValidator(password: FormControl) {
    return function (confirmationPassword: FormControl) {
        const pass = password.value;
        const conf = confirmationPassword.value;
        return pass === conf ? null : { matcher: true };
    };
}

