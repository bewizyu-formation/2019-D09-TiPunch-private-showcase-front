import { User } from './user.model';

export class ArtistSignUp extends User {
    constructor(username: string,
        password: string,
        email: string,
        city: string,
        public name: string,
        public description: string,
        roles: Array<String>) {
        super(username, password, email, city, roles);
    }
}
