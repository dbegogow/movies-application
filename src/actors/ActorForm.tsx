import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { actorFormProps } from './actorFormProps.module';
import TextField from '../forms/TextField';
import Button from '../utils/Button';

export default function (props: actorFormProps) {
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
                    <TextField
                        displayName="Name"
                        field="name"
                    />

                    <Button
                        disabled={formikProps.isSubmitting}
                        type="submit"
                    >
                        Save Changes
                    </Button>
                    <Link to="/actors" className="btn btn-secondary">Cancel</Link>
                </Form>
            )}
        </Formik>
    );
};