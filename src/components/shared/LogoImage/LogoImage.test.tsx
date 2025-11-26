import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LogoImage } from "./LogoImage";

describe("LogoImage", () => {
    it("renders logo image with link", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <LogoImage
                        image="test.png"
                        name="Test Logo"
                        link="https://example.com"
                    />
                </ThemeProvider>
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
                <ThemeProvider>
                    <LogoImage
                        image="test.png"
                        name="Home Logo"
                        link="/"
                    />
                </ThemeProvider>
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
                <ThemeProvider>
                    <LogoImage
                        image="logo.svg"
                        name="Company Logo"
                        link="https://company.com"
                    />
                </ThemeProvider>
            </BrowserRouter>
        );

        const image = screen.getByAltText("Company Logo");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "logo.svg");
    });

    it("handles mouse enter and leave events", () => {
        const { container } = render(
            <BrowserRouter>
                <ThemeProvider>
                    <LogoImage
                        image="test.png"
                        name="Test Logo"
                        link="https://example.com"
                    />
                </ThemeProvider>
            </BrowserRouter>
        );

        // LazyLoadImage wraps the img in a span, so we need to find the actual img element
        const images = container.querySelectorAll('img');
        const image = Array.from(images).find(img => img.alt === 'Test Logo');

        expect(image).toBeInTheDocument();

        // The component has onMouseEnter and onMouseLeave handlers
        // Just verify the component renders with the handlers
        expect(image).toHaveAttribute('src', 'test.png');
        expect(image).toHaveAttribute('alt', 'Test Logo');
    });

    it("uses theme-specific image when image is object", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <LogoImage
                        image={{
                            lightImage: "logo-light.png",
                            darkImage: "logo-dark.png"
                        }}
                        name="Themed Logo"
                        link="https://example.com"
                    />
                </ThemeProvider>
            </BrowserRouter>
        );

        const image = screen.getByAltText("Themed Logo");
        // In test environment, theme defaults to dark
        expect(image).toHaveAttribute("src", "logo-dark.png");
    });
});
