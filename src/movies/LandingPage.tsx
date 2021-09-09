import { useEffect, useState } from 'react';
import { landingPageDTO } from './landingPage.module.d';
import MoviesList from './MoviesList';

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
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
                ],
                upcomingReleases: [
                    {
                        id: 31,
                        title: 'Soul',
                        poster: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg'
                    }
                ]
            })
        }, 1000);

        return () => clearTimeout(timerId);
    });


    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    );
}