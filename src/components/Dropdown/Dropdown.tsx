import React, { useRef, useState } from "react";
import clsx from "clsx";

import { useOutsideClick } from "../../globals/hooks";
import Button from "../../ui-kit/Button";
import Backdrop from "../../ui-kit/Backdrop";
import { MenuList } from "./Dropdown.components";
import { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.scss";

export const Dropdown = ({
    children,
    menuList,
    sx,
    listSx,
    listItemSx,
    backdropSx,
    containerSx,
    withBackdrop,
    ...rest
}: DropdownProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useOutsideClick(ref, () => {
        setIsOpen(false);
    });

    return (
        <>
            <div className={clsx(styles.container, containerSx)}>
                <Button sx={clsx(styles.button, sx)} {...rest}>
                    {children}
                </Button>
                <MenuList
                    menuList={menuList}
                    listSx={listSx}
                    listItemSx={listItemSx}
                />
            </div>
            {withBackdrop && isOpen && <Backdrop sx={backdropSx} />}
        </>
    );
};
