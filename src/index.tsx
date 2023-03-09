import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./globals/styles/reset.scss";
import "./globals/styles/fonts.scss";
import "./globals/styles/styles.scss";

const NodeContainer = document.getElementById("app") as Element;
const RootElement = createRoot(NodeContainer);

RootElement.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
