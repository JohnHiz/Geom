import React from "react";
import clsx from "clsx";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = ({
    Icon,
    sx,
    iconSx,
    inputSx,
    type = "text",
    ...rest
}: InputProps) => (
    <div className={clsx(styles.container, sx)}>
        {Icon && <Icon className={clsx(styles.icon, iconSx)} />}
        <input className={clsx(styles.input, inputSx)} type={type} {...rest} />
    </div>
);
