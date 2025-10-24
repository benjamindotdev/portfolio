import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
);
