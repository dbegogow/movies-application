import { buttonProps } from './buttonProps.module';

export default function Button(props: buttonProps) {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            className="btn btn-primary"
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    disabled: false
};