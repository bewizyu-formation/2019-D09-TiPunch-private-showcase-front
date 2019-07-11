import { Artist } from './Artist';

export class ArtistDetail {
    constructor(
        public artist: Artist,
        public photo: string,
        public site: string,
        public vote: number,
        public phoneNumber: number,
        public description: string
    ) { }
}
