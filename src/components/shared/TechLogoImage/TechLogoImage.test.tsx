import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TechLogoImage } from "./TechLogoImage";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";

const mockImage = {
    key: 1,
    image: "test",
    name: "test",
    link: "/test",
};

test("renders the TechLogoImage component with provided props", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechLogoImage
                    image={mockImage.image}
                    name={mockImage.name}
                    link={mockImage.link}
                />
            </ThemeProvider>
        </BrowserRouter>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the TechLogoImage component with different text", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechLogoImage
                    image="another test"
                    name="another test"
                    link="/another-test"
                />
            </ThemeProvider>
        </BrowserRouter>
    );
    expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the TechLogoImage component with correct Tailwind classes", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechLogoImage
                    image={mockImage.image}
                    name={mockImage.name}
                    link={mockImage.link}
                />
            </ThemeProvider>
        </BrowserRouter>
    );
    expect(screen.getByRole("link")).toHaveClass("relative");
    expect(screen.getByRole("link")).toHaveClass("group");
    expect(screen.getByRole("img")).toHaveClass("h-6");
    expect(screen.getByRole("img")).toHaveClass("md:h-8");
});
