import {AbstractControl, FormControl, FormGroup } from "@angular/forms";

export function passwordMatchValidator(password:FormControl) {
    return function(confirmationPassword: FormControl) {
        let pass =password.value;
        let conf =confirmationPassword.value;
        return pass === conf ? null : {matcher:true};
    }
}

