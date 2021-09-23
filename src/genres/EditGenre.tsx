import GenreForm from './GenreForm';
import EditEntity from '../utils/EditEntity';
import { genreCreationDTO, genreDTO } from './interfaces/genres.module';
import { urlGenres } from '../endpoints';

export default function EditGenre() {
    return (
        <>
            <EditEntity<genreCreationDTO, genreDTO>
                url={urlGenres}
                entityName="Genres"
                indexUrl="/genres"
            >
                {
                    (entity, edit) =>
                        <GenreForm model={entity}

                            onSubmit={async value => {
                                await edit(value);
                            }}
                        />
                }
            </EditEntity>
        </>
    );
}