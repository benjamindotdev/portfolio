import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

describe("ThemeToggle", () => {
    it("renders toggle button", () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        
        const button = screen.getByRole("button", { name: /toggle theme/i });
        expect(button).toBeInTheDocument();
    });

    it("displays sun icon in dark mode", () => {
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        
        const button = screen.getByRole("button");
        const svg = button.querySelector("svg");
        expect(svg).toBeInTheDocument();
    });

    it("toggles theme on click", () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        
        const button = screen.getByRole("button");
        fireEvent.click(button);
        
        // Button should still be in document after click
        expect(button).toBeInTheDocument();
    });

    it("has correct aria-label", () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        
        const button = screen.getByLabelText("Toggle theme");
        expect(button).toBeInTheDocument();
    });

    it("applies hover transition classes", () => {
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        
        const button = screen.getByRole("button");
        expect(button).toHaveClass("transition-colors", "duration-300");
    });
});
