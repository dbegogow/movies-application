import { actorMovieDTO } from "../../actors/interfaces/actors.module";

export interface movieDTO {
    id: number;
    title: string;
    poster: string;
};

export interface movieCreationDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
};