import MovieForm from './MovieForm';

export default function CreateMovie() {
    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm
                model={{ title: '', inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}