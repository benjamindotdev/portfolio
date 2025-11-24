import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "./Badge";
import { ThemeProvider } from "@/contexts/ThemeContext";

describe("Badge", () => {
    it("renders with default variant", () => {
        render(
            <ThemeProvider>
                <Badge text="Test Badge" />
            </ThemeProvider>
        );
        expect(screen.getByText("Test Badge")).toBeInTheDocument();
    });

    it("renders with current variant", () => {
        render(
            <ThemeProvider>
                <Badge text="Current Badge" variant="current" />
            </ThemeProvider>
        );
        const badge = screen.getByText("Current Badge");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass("bg-green-600");
    });

    it("applies correct classes for default variant", () => {
        render(
            <ThemeProvider>
                <Badge text="Default Badge" variant="default" />
            </ThemeProvider>
        );
        const badge = screen.getByText("Default Badge");
        expect(badge).toHaveClass("px-3", "py-1.5", "rounded-md", "text-xs", "whitespace-nowrap");
    });
});
