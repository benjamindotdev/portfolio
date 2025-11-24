import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { benjamin } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";
import type { Technology } from "../../global";
import "@testing-library/jest-dom";

const mockTechnologies = benjamin.technologies as Technology[];

describe("Home Component", () => {
    it("renders the Home component with provided props", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home
                        technologies={mockTechnologies}
                        image="/images/test-image.jpg"
                        name="Benjamin"
                    />
                </ThemeProvider>
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

    it("renders default image when no image is provided", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home technologies={mockTechnologies} name="Benjamin" />
                </ThemeProvider>
            </BrowserRouter>
        );

        const heroImage = screen.getByAltText("Benjamin");
        expect(heroImage).toHaveAttribute("src", "/images/heroCropped4.webp");
    });
});
