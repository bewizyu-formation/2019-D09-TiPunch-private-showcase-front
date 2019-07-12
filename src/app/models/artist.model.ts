import { User } from './user.model';

export class Artist extends User {
    constructor(public username: string,
        public password: string,
        public email: string,
        public city: string,
        public vote: number,
        public description = '',
        public image: string | undefined,
        public descriptionLongue = '',
        public roles: Array<String> = new Array<String>()) {
        super(username, password, email, city, roles);
    }
}
