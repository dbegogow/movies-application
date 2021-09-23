import { ReactElement } from "react-markdown/lib/react-markdown";

export interface indexEntityProps<T> {
    url: string;
    createUrl: string;
    title: string;
    entityName: string;
    children(
        entities: T[], 
        buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
};