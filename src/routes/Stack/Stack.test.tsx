import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";
import { benjamin } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import type { Technology } from "../../global";
import "@testing-library/jest-dom";

const mockTechnologies = benjamin.technologies as Technology[];

describe("Stack Component", () => {
    it("renders the Stack component with technologies", () => {
        render(
            <BrowserRouter>
                <Stack technologies={mockTechnologies} />
            </BrowserRouter>
        );

        expect(screen.getByText("Front end")).toBeInTheDocument();
        expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    });

    it("renders the correct technology categories", () => {
        render(
            <BrowserRouter>
                <Stack technologies={mockTechnologies} />
            </BrowserRouter>
        );

        expect(screen.getByText("Front end")).toBeInTheDocument();
        expect(screen.getAllByText("React").length).toBeGreaterThan(0);
        expect(screen.getByText("Back end")).toBeInTheDocument();
        expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
        expect(screen.getByText("Tools")).toBeInTheDocument();
        expect(screen.getAllByText("Docker").length).toBeGreaterThan(0);
    });

    it("renders empty when no technologies are provided", () => {
        const { container } = render(
            <BrowserRouter>
                <Stack technologies={[]} />
            </BrowserRouter>
        );

        const techLists = container.querySelectorAll('[class*="flex flex-wrap"]');
        expect(techLists.length).toBeGreaterThan(0);
    });
});
