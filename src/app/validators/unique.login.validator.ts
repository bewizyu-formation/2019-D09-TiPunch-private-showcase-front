import { FormControl } from '@angular/forms';
import { UserService } from '../user/user.service';


let checkLogin:boolean;
export function userNameNotTakenValidator(userService: UserService) {
  return function (control: FormControl) {
    userService.checkUsernameNotTaken(control.value).then((item)=>{checkLogin = item})
    .catch(e=>{console.log(e)});
    return checkLogin ? null : { loginTaken: true };
  };
}
