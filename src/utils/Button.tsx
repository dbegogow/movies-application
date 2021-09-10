import { buttonProps } from './buttonProps.module';

export default function Button(props: buttonProps) {
    return (
        <button
            className="btn btn-primary"
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};