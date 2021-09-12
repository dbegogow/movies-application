import { FormikHelpers } from 'formik';
import { movieTheaterCreationDTO } from './movieTheater.model';

export interface movieTheaterForm {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
};