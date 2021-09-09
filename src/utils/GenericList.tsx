import { genericListProps } from './genericListProps.module';
import Loading from './Loading';

export default function GenericList(props: genericListProps) {
    if (!props.list) {
        if (props.loadingUI) {
            return props.loadingUI;
        }
        
        return <Loading />;
    }

    if (props.list.length === 0) {
        if (props.emptyListUI) {
            return props.emptyListUI;
        }

        return <>There are no elements to display</>;
    }

    return props.children;
}