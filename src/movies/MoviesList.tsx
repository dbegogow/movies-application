import css from './MoviesList.module.css';
import { moviesListProps } from './interfaces/moviesListProps.module';
import IndividualMovie from './IndividualMovie';
import GenericList from '../utils/GenericList';

export default function MoviesList(props: moviesListProps) {
    return (
        <GenericList list={props.movies}>
            <div className={css.div}>
                {props.movies?.map(movie =>
                    <IndividualMovie {...movie} key={movie.id} />)}
            </div>
        </GenericList>
    );
}