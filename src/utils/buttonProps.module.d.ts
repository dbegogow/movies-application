import React from "react";

export interface buttonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: 'button' | 'submit'
    disabled: boolean;
}