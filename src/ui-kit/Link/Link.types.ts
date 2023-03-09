import { CSSProperties, RefAttributes } from "react";
import { LinkProps as DefaultLinkProps } from "react-router-dom";

export interface LinkProps extends DefaultLinkProps, RefAttributes<
    HTMLAnchorElement
> {
    sx?: CSSProperties | string | string[];
}
