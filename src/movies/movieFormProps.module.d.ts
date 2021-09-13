import { FormikHelpers } from 'formik';
import { movieCreationDTO } from './movie.module';

export interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
};