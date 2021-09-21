import axios from 'axios';
import { useHistory } from 'react-router';
import { ulrGenres } from '../endpoints';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './interfaces/genres.module';

export default function CreateGenre() {
    const history = useHistory();

    async function create(genre: genreCreationDTO) {
        try {
            await axios.post(ulrGenres, genre);
            history.push('/genres');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{ name: '' }}

                onSubmit={async value => {
                    await create(value);
                }}
            />
        </>
    );
}