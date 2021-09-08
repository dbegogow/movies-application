import css from "./MoviesList.module.css";
import { moviesListProps } from "./moviesListProps.module";
import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovie";

export default function MoviesList(props: moviesListProps) {
    if (!props.movies) {
        return <Loading />
    }

    if (props.movies.length === 0) {
        return <>There are no movies to display</>
    }

    return (
        <div className={css.div}>
            {props.movies?.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />)}
        </div>
    );
};