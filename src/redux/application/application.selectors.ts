import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

const rootSelector = (state: RootState) => state.application;

export const getSidebarState = createSelector(
    rootSelector,
    (state) => state.isSidebarOpen,
);
