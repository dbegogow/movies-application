import { ReactElement } from 'react';

export interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
};