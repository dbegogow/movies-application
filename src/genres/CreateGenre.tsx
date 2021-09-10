import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../utils/Button';
import TextField from '../forms/TextField';

export default function CreateGenre() {
    return (
        <>
            <h3>Create Genre</h3>

            <Formik initialValues={{
                name: ''
            }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1));

                    console.log(value);
                }}
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
        </>
    );
}