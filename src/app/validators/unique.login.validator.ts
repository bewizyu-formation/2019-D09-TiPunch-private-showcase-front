import { FormControl } from '@angular/forms';
import { UserService } from '../user/user.service';



export function userNameNotTakenValidator(userService: UserService) {
  return function (control: FormControl) {
    let checkLogin:boolean;
    userService.checkUsernameNotTaken(control.value).then((item)=>checkLogin = item).catch(e=>{console.log(e)});
    return checkLogin ? null : { loginTaken: true };
  };
}
