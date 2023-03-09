import React from "react";
import clsx from "clsx";

import { TypographyProps } from "./Typography.types";
import styles from "./Typography.module.scss";

export const Typography = ({
    children,
    sx,
    size = "m",
    caps = false,
    weight = "regular",
    variant = "normal",
    ...rest
}: TypographyProps) => (
    <span
        className={clsx(
            styles.typography,
            styles[size],
            styles[weight],
            styles[variant],
            caps && styles.caps,
            sx,
        )}
        {...rest}
    >
        {children}
    </span>
);
