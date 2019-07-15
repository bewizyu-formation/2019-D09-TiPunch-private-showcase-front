export class ArtistDetail {
    constructor(
        public photo: string,
        public name: string,
        public description: string,
        public longDescription: string,
        public site: string,
        public phoneNumber: string,
        public city: string,
        public nbVotes: number,
        public moyVotes: number,
        public departments: Array<string>
    ) { }
}
