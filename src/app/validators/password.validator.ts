import { FormControl } from '@angular/forms';



export function passwordMatchValidator(password: FormControl) {
    return function (confirmationPassword: FormControl) {
        const pass = password.value;
        const conf = confirmationPassword.value;
        return pass === conf ? null : { matcher: true };
    };
}
