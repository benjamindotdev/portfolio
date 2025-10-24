import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log to console
        console.error("ErrorBoundary caught an error:", error, errorInfo);

        // Send to analytics in production
        if (process.env.NODE_ENV === 'production' && window.gtag) {
            window.gtag('event', 'exception', {
                description: error.toString(),
                fatal: true,
                error_component: errorInfo.componentStack?.split('\n')[1]?.trim() || 'unknown',
            });
        }

        // In development, you could also send to error tracking service
        // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
    }

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
                    <div className="max-w-2xl w-full text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-xl mb-8 text-gray-400">
                            We're sorry, but something unexpected happened. Please try
                            refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Refresh Page
                        </button>
                        {process.env.NODE_ENV === "development" && this.state.error && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-red-400 mb-2">
                                    Error Details (Development Only)
                                </summary>
                                <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-sm">
                                    {this.state.error.toString()}
                                    {this.state.error.stack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
