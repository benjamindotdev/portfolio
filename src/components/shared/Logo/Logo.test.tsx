import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "./Logo";
import { ThemeProvider } from "@/contexts/ThemeContext";

describe("Logo", () => {
    it("renders SVG element", () => {
        const { container } = render(
            <ThemeProvider>
                <Logo data-testid="logo" />
            </ThemeProvider>
        );
        
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("viewBox", "0 0 120 170");
    });

    it("contains two rectangles", () => {
        const { container } = render(
            <ThemeProvider>
                <Logo />
            </ThemeProvider>
        );
        
        const rects = container.querySelectorAll("rect");
        expect(rects).toHaveLength(2);
    });

    it("applies custom props to SVG", () => {
        const { container } = render(
            <ThemeProvider>
                <Logo className="custom-class" width={100} height={100} />
            </ThemeProvider>
        );
        
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("custom-class");
        expect(svg).toHaveAttribute("width", "100");
        expect(svg).toHaveAttribute("height", "100");
    });

    it("changes color on hover", () => {
        const { container } = render(
            <ThemeProvider>
                <Logo />
            </ThemeProvider>
        );
        
        const svg = container.querySelector("svg")!;
        fireEvent.mouseEnter(svg);
        
        // After hover, fill should change to portfolio-green
        const rects = container.querySelectorAll("rect");
        rects.forEach(rect => {
            expect(rect).toHaveAttribute("fill", "#2bf38b");
        });
    });

    it("resets color on mouse leave", () => {
        const { container } = render(
            <ThemeProvider>
                <Logo />
            </ThemeProvider>
        );
        
        const svg = container.querySelector("svg")!;
        const rects = container.querySelectorAll("rect");
        
        // Hover
        fireEvent.mouseEnter(svg);
        expect(rects[0]).toHaveAttribute("fill", "#2bf38b");
        
        // Leave hover
        fireEvent.mouseLeave(svg);
        // Should reset to default dark theme color
        expect(rects[0]).toHaveAttribute("fill", "#ffffff");
    });
});
