import { CSSProperties } from "react";
import { ButtonProps } from "../../ui-kit/Button";

export type MenuListItem = {
    title: string;
    [x: string]: any;
};

export type MenuListProps = Pick<
    DropdownProps, "menuList" | "listSx" | "listItemSx"
>;

export interface DropdownProps extends ButtonProps {
    menuList: MenuListItem[];
    withBackdrop?: boolean;
    listSx?: CSSProperties | string | string[];
    listItemSx?: CSSProperties | string | string[];
    backdropSx?: CSSProperties | string | string[];
    containerSx?: CSSProperties | string | string[];
}
