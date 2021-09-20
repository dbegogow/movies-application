export interface multipleSelectorProps {
    displayName: string;
    selected: multipleSelectorModel[];
    nonSelected: multipleSelectorModel[];
    onChange(selected: multipleSelectorModel[], nonSelected: multipleSelectorModel[]): void;
};

export interface multipleSelectorModel {
    key: number;
    value: string;
};