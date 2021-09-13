import { Field } from 'formik';
import { checkboxField } from './checkboxField.module';

export default function CheckboxField(props: checkboxField) {
    return (
        <div className="mb-3 form-check">
            <Field
                className="form-check-input"
                id={props.field}
                name={props.field}
                type="checkbox"
            />

            <label htmlFor={props.field}>{props.displayName}</label>
        </div>
    );
};