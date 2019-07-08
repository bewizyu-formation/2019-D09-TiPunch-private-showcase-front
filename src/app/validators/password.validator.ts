import { FormControl } from "@angular/forms";


/**
* Le valeur du champ est-il similaire au champ password?
* @param {FormControl} password
* @param {FormControl} confirmationPassword
* @returns {{matcher: boolean}}
*/
export function passwordMatchValidator(password:FormControl) {
    return function(confirmationPassword: FormControl) {
        let pass =password.value;
        let conf =confirmationPassword.value;
        return pass === conf ? null : {matcher:true};
    }
}

