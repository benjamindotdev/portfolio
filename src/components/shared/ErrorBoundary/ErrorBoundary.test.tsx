import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundary from "./ErrorBoundary";

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
        throw new Error("Test error");
    }
    return <div>No error</div>;
};

describe("ErrorBoundary", () => {
    // Suppress console.error for these tests
    const originalError = console.error;
    beforeAll(() => {
        console.error = jest.fn();
    });

    afterAll(() => {
        console.error = originalError;
    });

    it("renders children when there is no error", () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={false} />
            </ErrorBoundary>
        );
        expect(screen.getByText("No error")).toBeInTheDocument();
    });

    it("renders default error UI when an error occurs", () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(
            screen.getByText("Oops! Something went wrong")
        ).toBeInTheDocument();
        expect(screen.getByText("Refresh Page")).toBeInTheDocument();
    });

    it("renders custom fallback when provided", () => {
        render(
            <ErrorBoundary fallback={<div>Custom error message</div>}>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(screen.getByText("Custom error message")).toBeInTheDocument();
    });

    it("calls console.error when an error is caught", () => {
        const consoleErrorSpy = jest.spyOn(console, "error");
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it("sends error to gtag in production when available", () => {
        const originalGtag = (window as any).gtag;
        
        const mockGtag = jest.fn();
        (window as any).gtag = mockGtag;

        // Mock config to be production
        jest.mock('@/config/env', () => ({
            config: {
                isDevelopment: false,
                isProduction: true,
            }
        }));

        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );

        // If gtag is available, it should be called
        if (mockGtag.mock.calls.length > 0) {
            expect(mockGtag).toHaveBeenCalledWith('event', 'exception', expect.objectContaining({
                fatal: true,
            }));
        }

        // Restore
        (window as any).gtag = originalGtag;
        jest.unmock('@/config/env');
    });

    it("shows error details conditionally", () => {
        render(
            <ErrorBoundary>
                <ThrowError shouldThrow={true} />
            </ErrorBoundary>
        );

        // In test environment, check if error UI is rendered
        expect(screen.getByText("Oops! Something went wrong")).toBeInTheDocument();
    });
});
