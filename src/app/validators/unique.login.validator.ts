import { FormControl } from '@angular/forms';
import { UserService } from '../user/user.service';



export function userNameNotTakenValidator(userService: UserService) {
  return function (control: FormControl) {
    let checkLogin:boolean;
    userService.checkUsernameNotTaken(control.value).then((item)=>{
      checkLogin = item
      console.log(checkLogin)
    })
    .catch(e=>{console.log(e)});
    console.log("testvalidator 1:" +checkLogin)
    return checkLogin ? null : { loginTaken: true };
  };
}

/* export function userNameNotTakenValidator(userService: UserService) {
  return function (control: FormControl) {
    let checkLogin:boolean;
    return new Promise ((resolve) => {
      userService.checkUsernameNotTaken(control.value)
      .then((item)=>{
        checkLogin = item
        console.log(checkLogin)
        resolve(checkLogin)
      })
      .catch(e=>{console.log(e)});
      console.log("testvalidator 1:" +checkLogin)
      return checkLogin ? null : { loginTaken: true };
    })
  };
} */

