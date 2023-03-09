import React from "react";
import clsx from "clsx";
import { Link as DefaultLink } from "react-router-dom";

import { LinkProps } from "./Link.types";
import styles from "./Link.module.scss";

export const Link = ({
    children,
    sx,
    to,
    ...rest
}: LinkProps) => (
    <DefaultLink to={to} className={clsx(styles.link, sx)} {...rest}>
        {children}
    </DefaultLink>
);
