import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { movieTheaterForm } from './movieTheaterForm.module';
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import Map from '../utils/Map';


export default function MovieTheaterForm(props: movieTheaterForm) {
    return (
        <Formik
            initialValues={props.model}
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
                    <TextField displayName="Name" field="name" />

                    <div style={{ marginBottom: '1rem' }}>
                        <Map />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Save Change</Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    );
};