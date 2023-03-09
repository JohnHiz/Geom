import { ButtonHTMLAttributes, CSSProperties } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    sx?: CSSProperties | string | string[];
    variant?: BaseComponentVariant;
}
