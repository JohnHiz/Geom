import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApplicationState } from "./application.types";

const initialState: ApplicationState = {
    isSidebarOpen: false,
};

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setSidebarState: (state, { payload }: PayloadAction<boolean>) => {
            state.isSidebarOpen = payload;
        },
    },
});

export const {
    setSidebarState,
} = applicationSlice.actions;

export default applicationSlice.reducer;
