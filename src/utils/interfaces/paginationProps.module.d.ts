export interface paginationProps {
    currentPage: number;
    totalAmountOfPages: number;
    radio: number;
    onChange(page: number): void;
};

export interface linkModel {
    page: number;
    enabled: boolean;
    text: string;
    active: boolean;
};