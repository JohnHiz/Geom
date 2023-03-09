import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Default from "../layouts/Default";
import Home from "../pages/Home";
import Error from "../pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />,
            },
        ],
    },
]);
