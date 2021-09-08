import css from "./MoviesList.module.css";
import { moviesListProps } from "./moviesListProps.module";
import IndividualMovie from "./IndividualMovie";

export default function MoviesList(props: moviesListProps) {
    return (
        <div className={css.div}>
            {props.movies.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />)}
        </div>
    );
};