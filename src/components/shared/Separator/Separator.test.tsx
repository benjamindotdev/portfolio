import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Separator } from "./Separator";

describe("Separator", () => {
    it("renders pipe character", () => {
        render(<Separator />);
        expect(screen.getByText("|")).toBeInTheDocument();
    });

    it("renders as span element", () => {
        const { container } = render(<Separator />);
        const span = container.querySelector("span");
        expect(span).toBeInTheDocument();
        expect(span).toHaveTextContent("|");
    });

    it("applies correct styling classes", () => {
        const { container } = render(<Separator />);
        const span = container.querySelector("span");
        expect(span).toHaveClass("opacity-60", "text-slate-700", "dark:text-portfolio-white");
    });
});
