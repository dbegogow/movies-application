import { buttonProps } from './interfaces/buttonProps.module';

export default function Button(props: buttonProps) {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            className={props.className}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    className: "btn btn-primary"
};