import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { actorCretionDTO } from './interfaces/actors.module';
import { convertActorToFormData } from '../utils/formDataUtils';
import { urlActors } from '../endpoints';
import ActorForm from './ActorForm';
import DisplayErrors from '../utils/DisplayErrors';

export default function CreateActor() {
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    async function create(actor: actorCretionDTO) {
        try {
            const formData = convertActorToFormData(actor);

            await axios({
                method: 'post',
                url: urlActors,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            history.push('/actors');
        } catch (error: any) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Actor</h3>
            <DisplayErrors errors={errors} />
            <ActorForm
                model={{ name: '', dateOfBirth: undefined }}
                onSubmit={async values => await create(values)}
            />
        </>
    );
}