import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {
    PATH_LOGIN,
    PATH_WELCOME,
    PATH_SIGNUP,
    PATH_HOME,
    PATH_EVENT,
    PATH_CONTACT,
    PATH_PROFIL,
    PATH_ARTIST
} from './app-routing.constantes';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ArtistComponent } from './components/artist/artist.component';
import { VoteComponent } from './components/vote/vote.component';

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
        path: PATH_EVENT,
        component: EventComponent
    },
    {
        path: PATH_CONTACT,
        component: ContactComponent
    },
    {
        path: PATH_PROFIL,
        component: ProfilComponent
    },
    {
        path: PATH_ARTIST + '/:nameArtist',
        component: ArtistComponent
    },
    {
        path: 'vote',
        component: VoteComponent
    }

];
