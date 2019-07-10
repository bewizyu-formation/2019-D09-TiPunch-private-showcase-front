import { UserService } from '../user/user.service';
import { FormControl } from '@angular/forms';



let checkArtistname:boolean;
export function artistNameNotTakenValidator(userService: UserService) {
  return function (control: FormControl) {
    userService.checkArtistnameNotTaken(control.value).then((item)=>{checkArtistname = item})
    .catch(e=>{console.log(e)});
    return checkArtistname ? null : { artistnameTaken: true };
  };
}
