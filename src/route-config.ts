import IndexGenres from './genres/IndexGenres';
import LandingPage from './movies/LandingPage';

const routes = [
    { path: '/', component: LandingPage, exact: true },
    { path: '/genres', component: IndexGenres }
];

export default routes;