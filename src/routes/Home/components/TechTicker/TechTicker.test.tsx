import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TechTicker } from "./TechTicker";
import type { Technology } from "../../../../global";

const mockTechnologies: Technology[] = [
    {
        key: 0,
        name: "React",
        image: "logos/react.svg",
        link: "https://react.dev/",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 1,
        name: "TypeScript",
        image: "logos/typescript.svg",
        link: "https://www.typescriptlang.org/",
        type: "Frontend",
        isLearning: false,
    },
];

describe("TechTicker", () => {
    beforeEach(() => {
        // Mock scrollIntoView
        Element.prototype.scrollIntoView = jest.fn();
    });

    it("renders technologies correctly", () => {
        render(<TechTicker technologies={mockTechnologies} />);

        // Technologies are duplicated, so we use getAllByText
        const reactElements = screen.getAllByText("React");
        const typescriptElements = screen.getAllByText("TypeScript");

        expect(reactElements.length).toBeGreaterThan(0);
        expect(typescriptElements.length).toBeGreaterThan(0);
    });

    it("renders technology images", () => {
        render(<TechTicker technologies={mockTechnologies} />);

        const reactImages = screen.getAllByAltText("React");
        const typescriptImages = screen.getAllByAltText("TypeScript");

        expect(reactImages.length).toBeGreaterThan(0);
        expect(typescriptImages.length).toBeGreaterThan(0);
    });

    it("does not render when isVisible is false", () => {
        render(<TechTicker technologies={mockTechnologies} isVisible={false} />);

        expect(screen.queryByText("React")).not.toBeInTheDocument();
    });

    it("opens technology link on click", () => {
        const mockOpen = jest.fn();
        window.open = mockOpen;

        render(<TechTicker technologies={mockTechnologies} />);

        const reactElement = screen.getAllByText("React")[0];
        fireEvent.click(reactElement);

        expect(mockOpen).toHaveBeenCalledWith(
            "https://react.dev/",
            "_blank",
            "noopener,noreferrer"
        );
    });
});
