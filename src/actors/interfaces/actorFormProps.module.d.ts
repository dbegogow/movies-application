import { FormikHelpers } from 'formik';
import { actorCretionDTO } from './actors.module';

export interface actorFormProps {
    model: actorCretionDTO;
    onSubmit(values: actorCretionDTO, action: FormikHelpers<actorCretionDTO>): void;
};