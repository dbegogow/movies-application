import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{
                    name: 'Sambil',
                    latitude: 42.697435,
                    longitude: 23.323332
                }}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}