import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{ name: 'Sambil' }}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}