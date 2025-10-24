import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { LogoImage } from "./LogoImage";

describe("LogoImage", () => {
    it("renders logo image with link", () => {
        render(
            <BrowserRouter>
                <LogoImage
                    image="test.png"
                    name="Test Logo"
                    link="https://example.com"
                />
            </BrowserRouter>
        );

        const link = screen.getByRole("link", { name: "Test Logo" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noreferrer");
    });

    it("renders internal link without target blank", () => {
        render(
            <BrowserRouter>
                <LogoImage
                    image="test.png"
                    name="Home Logo"
                    link="/"
                />
            </BrowserRouter>
        );

        const link = screen.getByRole("link", { name: "Home Logo" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/");
        expect(link).not.toHaveAttribute("target");
        expect(link).not.toHaveAttribute("rel");
    });

    it("renders image with correct alt text", () => {
        render(
            <BrowserRouter>
                <LogoImage
                    image="logo.svg"
                    name="Company Logo"
                    link="https://company.com"
                />
            </BrowserRouter>
        );

        const image = screen.getByAltText("Company Logo");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "logo.svg");
    });
});
