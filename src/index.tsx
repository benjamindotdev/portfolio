import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import reportWebVitals, { sendToAnalytics } from "./utils/reportWebVitals";
import { initializeAnalytics } from "./utils/analytics";
import "./index.css";

// Initialize Google Analytics
initializeAnalytics();

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ErrorBoundary>
                <BrowserRouter>
                    <Root />
                </BrowserRouter>
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>
);

// Report web vitals to analytics
reportWebVitals(sendToAnalytics);
