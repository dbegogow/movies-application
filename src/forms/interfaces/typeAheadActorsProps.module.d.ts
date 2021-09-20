import { ReactElement } from 'react-markdown/lib/react-markdown';
import { actorMovieDTO } from '../../actors/interfaces/actors.module';

export interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
};