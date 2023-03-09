import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "./redux/store";
import { router } from "./router/router";

export const App = () => (
    <ReduxProvider store={store}>
        <RouterProvider router={router} />
    </ReduxProvider>
);
