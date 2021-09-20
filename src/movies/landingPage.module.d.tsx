import { movieDTO } from './interfaces/movie.module';

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
};