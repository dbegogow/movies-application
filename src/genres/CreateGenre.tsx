import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import Button from "../utils/Button";

export default function CreateGenre() {
    return (
        <>
            <h3>Create Genre</h3>

            <Formik initialValues={{
                name: ''
            }}
                onSubmit={value => {
                    // when the form is posted
                    console.log(value);
                }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <Field name="name" id="name" className="form-control" />
                    </div>

                    <Button type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            </Formik>
        </>
    );
}