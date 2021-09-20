import { FormikHelpers } from 'formik';
import { genreDTO } from '../../genres/interfaces/genres.module';
import { movieCreationDTO } from './movie.module';
import { movieTheaterDTO } from '../../movieTheaters/interfaces/movieTheater.model';
import { actorMovieDTO } from '../../actors/interfaces/actors.module';

export interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    selectedActors: actorMovieDTO[];
};