import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { editEntityProps } from './interfaces/editEntityProps.module';
import DisplayErrors from './DisplayErrors';
import Loading from './Loading';

export default function EditEntity<TCreation, TRead>(props: editEntityProps<TCreation, TRead>) {
    const { id }: any = useParams();

    const history = useHistory();

    const [entity, setEntity] = useState<TCreation>();
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${props.url}/${id}`)
            .then((response: AxiosResponse<TRead>) => {
                setEntity(props.transform(response.data));
            })
    }, [id]);

    async function edit(entityToEdit: TCreation) {
        try {
            await axios.put(`${props.url}/${id}`, entityToEdit);
            history.push(props.indexUrl);
        } catch (error: any) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Edit {props.entityName}</h3>
            <DisplayErrors errors={errors} />
            {
                entity
                    ? props.children(entity, edit)
                    : <Loading />
            }
        </>
    );
}

EditEntity.defaultProps = {
    transform: (entity: any) => entity
};