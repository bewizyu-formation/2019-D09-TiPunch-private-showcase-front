import { User } from './User';

export class Artist extends User {
    constructor(
        username: string,
        password: string,
        email: string,
        city: string,
        public name: string,
        public description: string,
        roles: Array<string>
    ) {
        super(username, password, email, city, roles);
    }
}
