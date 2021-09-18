import { actorMovieDTO } from '../actors/actors.module';

export interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
};