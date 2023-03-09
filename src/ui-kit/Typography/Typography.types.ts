import { LabelHTMLAttributes, CSSProperties } from "react";

export type TypographySize = "xl" | "l" | "m" | "s" | "xs" | "xxs";

export type TypographyWeight = "thin"
    | "light"
    | "regular"
    | "medium"
    | "bold"
    | "black";

export type TypographyVariant = "normal" | "cursive";

export interface TypographyProps extends LabelHTMLAttributes<HTMLLabelElement> {
    caps?: boolean;
    sx?: CSSProperties | string | string[];
    size?: TypographySize;
    weight?: TypographyWeight;
    variant?: TypographyVariant;
}
