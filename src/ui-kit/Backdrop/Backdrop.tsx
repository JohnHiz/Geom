import React from "react";
import clsx from "clsx";

import { BackdropProps } from "./Backdrop.types";
import styles from "./Backdrop.module.scss";

export const Backdrop = ({ sx }: BackdropProps) => (
    <div className={clsx(styles.backdrop, styles.active, sx)} />
);
