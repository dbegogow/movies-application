import LandingPage from './movies/LandingPage';
import IndexGenres from './genres/IndexGenres';
import CreateGenre from './genres/CreateGenre';
import EditGenre from './genres/EditGenre';
import IndexActors from './actors/IndexActors';
import CreateActor from './actors/CreateActor';
import EditActor from './actors/EditActor';
import IndexMovieTheaters from './movieTheaters/IndexMovieTheaters';
import CreateMovieTheater from './movieTheaters/CreateMovieTheater';
import EditMovieTheater from './movieTheaters/EditMovieTheater';
import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import FilterMovies from './movies/FilterMovies';

const routes = [
    { path: '/', component: LandingPage, exact: true },

    { path: '/genres', component: IndexGenres, exact: true },
    { path: '/genres/create', component: CreateGenre },
    { path: '/genres/edit', component: EditGenre },

    { path: '/actors', component: IndexActors, exact: true },
    { path: '/actors/create', component: CreateActor },
    { path: '/actors/edit', component: EditActor },

    { path: '/movie-theaters', component: IndexMovieTheaters, exact: true },
    { path: '/movie-theaters/create', component: CreateMovieTheater },
    { path: '/movie-theaters/edit', component: EditMovieTheater },

    { path: '/movies/create', component: CreateMovie},
    { path: '/movies/edit', component: EditMovie },
    { path: '/movies/filter', component: FilterMovies }
];

export default routes;