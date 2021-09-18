import { FormikHelpers } from 'formik';
import { genreDTO } from '../genres/genres.module';
import { movieCreationDTO } from './movie.module';
import { movieTheaterDTO } from '../movieTheaters/movieTheater.model';
import { actorMovieDTO } from '../actors/actors.module';

export interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    selectedActors: actorMovieDTO[];
};