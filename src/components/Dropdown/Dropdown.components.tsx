import React from "react";
import clsx from "clsx";

import Button from "../../ui-kit/Button";
import { MenuListProps } from "./Dropdown.types";
import styles from "./Dropdown.module.scss";

export const MenuList = ({
    menuList,
    listSx,
    listItemSx,
}: MenuListProps) => (
    <div className={clsx(styles.menuList, listSx)}>
        {menuList.map(({ title }, index) => (
            <Button
                key={`${title}_${index}`}
                className={clsx(styles.menuListButton, listItemSx)}
            >
                {title}
            </Button>
        ))}
    </div>
);
