import {
    InputHTMLAttributes,
    CSSProperties,
    FunctionComponent,
    SVGAttributes,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    sx?: CSSProperties | string | string[];
    iconSx?: CSSProperties | string | string[];
    inputSx?: CSSProperties | string | string[];
    Icon?: FunctionComponent<SVGAttributes<SVGElement>>;
}
