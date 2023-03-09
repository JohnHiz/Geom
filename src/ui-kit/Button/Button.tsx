import React from "react";
import clsx from "clsx";

import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button = ({
    children,
    sx,
    variant = "primary",
    type = "button",
    ...rest
}: ButtonProps) => (
    <button
        className={clsx(styles.button, styles[variant], sx)}
        type={type}
        {...rest}
    >
        {children}
    </button>
);
