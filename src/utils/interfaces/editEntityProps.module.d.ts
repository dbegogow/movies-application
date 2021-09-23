import { ReactElement } from 'react-markdown/lib/react-markdown';

export interface editEntityProps<TCreation, TRead> {
    url: string;
    entityName: string;
    indexUrl: string;
    transform(entity: TRead): TCreation;
    children(entity: TCreation, edit: (entity: TCreation) => void): ReactElement;
};