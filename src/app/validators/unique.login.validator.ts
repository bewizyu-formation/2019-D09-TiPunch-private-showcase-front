import { FormControl } from "@angular/forms";
import { UserService } from "../user/user.service";



export function userNameNotTakenValidator(userService: UserService) {
  return function (control: FormControl) {
    return userService.checkUsernameNotTaken(control.value) ? null : { loginTaken: true };
  }
}