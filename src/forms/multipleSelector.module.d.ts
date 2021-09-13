export interface multipleSelectorProps {
    displayName: string;
    selected: multipleSelectorModel[];
    nonSelected: multipleSelectorModel[];
    onChange(selected: multipleSelectorModel[], nonSelected: multipleSelectorModel[])
};

export interface multipleSelectorModel {
    key: number;
    value: string;
};