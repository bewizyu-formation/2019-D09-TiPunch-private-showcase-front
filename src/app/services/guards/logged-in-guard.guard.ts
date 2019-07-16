import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";
import { PATH_WELCOME } from "src/app/app-routing.constantes";

@Injectable()
export class LoggedInGuard implements CanActivate{

    constructor(private userService: UserService, private router: Router){};

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            if(this.userService.token){
                return true;
            }
            else{
                this.router.navigate([PATH_WELCOME]);
                return false;
            }
        }
    )
}