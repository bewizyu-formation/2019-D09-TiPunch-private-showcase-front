import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PATH_LOGIN, PATH_WELCOME, PATH_SIGNUP, PATH_HOME, PATH_ARTISTS } from './app-routing.constantes';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistsComponent } from './components/artists/artists.component';

export const ROUTES: Routes = [
    {
        path: PATH_WELCOME,
        component: WelcomeComponent
    },
    {
        path: PATH_LOGIN,
        component: LoginComponent
    },
    {
        path: PATH_SIGNUP,
        component: SignupComponent
    },
    {
        path: PATH_HOME,
        component: HomeComponent
    },
    {
        path: PATH_ARTISTS,
        component: ArtistsComponent
    }

];
