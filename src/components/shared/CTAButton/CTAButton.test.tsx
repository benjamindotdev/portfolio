import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CTAButton } from "./CTAButton";
import { Rocket } from "lucide-react";

describe("CTAButton", () => {
    it("renders with provided text and icon", () => {
        const mockOnClick = jest.fn();
        render(<CTAButton onClick={mockOnClick} text="Click Me" icon={Rocket} />);

        expect(screen.getByText("Click Me")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const mockOnClick = jest.fn();
        render(<CTAButton onClick={mockOnClick} text="Click Me" icon={Rocket} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("applies correct CSS classes", () => {
        const mockOnClick = jest.fn();
        render(<CTAButton onClick={mockOnClick} text="Click Me" icon={Rocket} />);

        const button = screen.getByRole("button");
        expect(button).toHaveClass("px-6", "py-3", "bg-transparent", "border-2");
    });
});
