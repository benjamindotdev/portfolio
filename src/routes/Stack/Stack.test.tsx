import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";
import { benjamin } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";
import type { Technology } from "../../global";
import "@testing-library/jest-dom";

const mockTechnologies = benjamin.technologies as Technology[];

describe("Stack Component", () => {
    it("renders the Stack component with technologies", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Stack technologies={mockTechnologies} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Core Technologies")).toBeInTheDocument();
        expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    });

    it("renders the correct technology categories", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Stack technologies={mockTechnologies} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Core Technologies")).toBeInTheDocument();
        expect(screen.getAllByText("React").length).toBeGreaterThan(0);
        expect(screen.getByText("Additional Tools")).toBeInTheDocument();
        expect(screen.getAllByText("Docker").length).toBeGreaterThan(0);
    });

    it("renders empty when no technologies are provided", () => {
        const { container } = render(
            <BrowserRouter>
                <ThemeProvider>
                    <Stack technologies={[]} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const mainElement = container.querySelector('main');
        expect(mainElement).toBeInTheDocument();
    });
});
