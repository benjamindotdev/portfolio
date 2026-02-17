import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SkillBadge } from "./SkillBadge";
import { ThemeProvider } from "@/contexts/ThemeContext";

describe("SkillBadge", () => {
    it("renders skill with label", () => {
        render(
            <ThemeProvider>
                <SkillBadge skill="TypeScript" />
            </ThemeProvider>
        );
        expect(screen.getByText("TypeScript")).toBeInTheDocument();
    });

    it("applies correct styling classes", () => {
        render(
            <ThemeProvider>
                <SkillBadge skill="React" />
            </ThemeProvider>
        );
        
        const badge = screen.getByText("React");
        expect(badge).toHaveClass(
            "text-sm",
            "px-3",
            "py-1.5",
            "rounded-md",
            "whitespace-nowrap"
        );
    });

    it("renders different skill names correctly", () => {
        const { rerender } = render(
            <ThemeProvider>
                <SkillBadge skill="JavaScript" />
            </ThemeProvider>
        );
        expect(screen.getByText("JavaScript")).toBeInTheDocument();

        rerender(
            <ThemeProvider>
                <SkillBadge skill="Node.js" />
            </ThemeProvider>
        );
        expect(screen.getByText("Node.js")).toBeInTheDocument();
    });
});
