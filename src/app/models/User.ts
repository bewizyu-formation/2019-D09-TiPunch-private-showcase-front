export class User{
    constructor(
        public username: string,
        public password: string,
        public email: string,
        public city: string,
        public roles: Array<String>
    ){}
}