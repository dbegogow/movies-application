import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import GenreForm from './GenreForm';
import { urlGenres } from '../endpoints';
import { genreCreationDTO } from './interfaces/genres.module';
import Loading from '../utils/Loading';
import DisplayErrors from '../utils/DisplayErrors';

export default function EditGenre() {
    const { id }: any = useParams();

    const history = useHistory();

    const [genre, setGenre] = useState<genreCreationDTO>();
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${urlGenres}/${id}`)
            .then((response: AxiosResponse<genreCreationDTO>) => {
                setGenre(response.data)
            })
    }, [id]);

    async function edit(genreToEdit: genreCreationDTO) {
        try {
            await axios.put(`${urlGenres}/${id}`, genreToEdit);
            history.push('/genres');
        } catch (error: any) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Edit Genre</h3>
            <DisplayErrors errors={errors} />
            {
                genre
                    ? <GenreForm model={genre}

                        onSubmit={async value => {
                            await edit(value);
                        }}
                    />
                    : <Loading />
            }
        </>
    );
}