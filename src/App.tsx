import './App.css';
import { movieDTO } from './movies/movie.module';
import MoviesList from './movies/MoviesList';

function App() {
    const inTheaters: movieDTO[] =
        [
            {
                id: 1,
                title: 'Spider-Man: Far From Home',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
            },
            {
                id: 2,
                title: 'Luca',
                poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'
            }
        ];

    const upcomingReleases: movieDTO[] =
        [
            {
                id: 31,
                title: 'Soul',
                poster: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg'
            }
        ];

    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={inTheaters} />

            <h3>Upcoming Releases</h3>
            <MoviesList movies={upcomingReleases} />
        </>
    );
}

export default App;
