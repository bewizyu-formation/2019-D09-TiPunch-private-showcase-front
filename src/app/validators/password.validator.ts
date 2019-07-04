import { FormControl, FormGroup, Validators } from "@angular/forms";
import _ from 'lodash';


export function passwordValidator(control:FormControl) {
    return Validators.pattern(/[A-Z]/) && Validators.pattern(/[a-z]/) && Validators.pattern(/\d/) && control.value.length === 8 ? null : {isGoodPassword:true}; 
}

export function passwordMatchValidator(control:FormControl) {
    return control.parent.get('password').value === control.parent.get('confirmationPassword').value ? null : {isPasswordMatch:true};
}
