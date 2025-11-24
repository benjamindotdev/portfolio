import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ViewClientBadge } from "./ViewClientBadge";
import { ThemeProvider } from "@/contexts/ThemeContext";

describe("ViewClientBadge", () => {
    const mockLinkedIn = "https://linkedin.com/in/testuser";

    it("renders link with correct text", () => {
        render(
            <ThemeProvider>
                <ViewClientBadge linkedIn={mockLinkedIn} />
            </ThemeProvider>
        );
        
        const link = screen.getByText("View Client");
        expect(link).toBeInTheDocument();
    });

    it("has correct href attribute", () => {
        render(
            <ThemeProvider>
                <ViewClientBadge linkedIn={mockLinkedIn} />
            </ThemeProvider>
        );
        
        const link = screen.getByText("View Client");
        expect(link).toHaveAttribute("href", mockLinkedIn);
    });

    it("opens in new tab with security attributes", () => {
        render(
            <ThemeProvider>
                <ViewClientBadge linkedIn={mockLinkedIn} />
            </ThemeProvider>
        );
        
        const link = screen.getByText("View Client");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("applies correct styling classes", () => {
        render(
            <ThemeProvider>
                <ViewClientBadge linkedIn={mockLinkedIn} />
            </ThemeProvider>
        );
        
        const link = screen.getByText("View Client");
        expect(link).toHaveClass(
            "text-sm",
            "px-3",
            "py-1.5",
            "rounded-md",
            "whitespace-nowrap",
            "no-underline",
            "transition-colors",
            "duration-300"
        );
    });
});
