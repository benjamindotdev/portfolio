import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { benjamin } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import type { Technology } from "../../global";
import "@testing-library/jest-dom";

const mockTechnologies = benjamin.technologies as Technology[];

describe("Home Component", () => {
    it("renders the Home component with provided props", () => {
        render(
            <BrowserRouter>
                <Home
                    technologies={mockTechnologies}
                    image="/images/test-image.jpg"
                    name="Benjamin"
                />
            </BrowserRouter>
        );

        expect(
            screen.getByText((content) => content.includes("Hey, I'm"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("Benjamin"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("sole developer at"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("Shep"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("Ironhack"))
        ).toBeInTheDocument();
    });

    it("renders the correct technology categories", () => {
        render(
            <BrowserRouter>
                <Home technologies={mockTechnologies} />
            </BrowserRouter>
        );

        expect(screen.getByText("Front end")).toBeInTheDocument();
        expect(screen.getAllByText("React").length).toBeGreaterThan(0);
        expect(screen.getByText("Back end")).toBeInTheDocument();
        expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
        expect(screen.getByText("Tools")).toBeInTheDocument();
        expect(screen.getAllByText("Docker").length).toBeGreaterThan(0);
    });

    it("renders default image when no image is provided", () => {
        render(
            <BrowserRouter>
                <Home technologies={mockTechnologies} name="Benjamin" />
            </BrowserRouter>
        );

        const heroImage = screen.getByAltText("Benjamin");
        expect(heroImage).toHaveAttribute("src", "/images/hero.webp");
    });
});
