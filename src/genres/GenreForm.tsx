import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { genreFormProps } from './interfaces/genreFormProps.module';
import Button from '../utils/Button';
import TextField from '../forms/TextField';

export default function GenreForm(props: genreFormProps) {
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup
                    .string()
                    .required('This field is required')
                    .firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    );
};