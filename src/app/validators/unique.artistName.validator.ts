import { UserService } from "../user/user.service";
import { FormControl } from "@angular/forms";



export function ArtistNameNotTakenValidator(userService:UserService) {
      return function(control:FormControl){
        return userService.checkArtistNameNotTaken(control.value) ? null : {artistNameTaken: true};
      }
  }