import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
import reportWebVitals, { sendToAnalytics } from "./utils/reportWebVitals";
import { initializeAnalytics } from "./utils/analytics";
import "./index.css";

// Initialize Google Analytics
initializeAnalytics();

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

// Report web vitals to analytics
reportWebVitals(sendToAnalytics);
