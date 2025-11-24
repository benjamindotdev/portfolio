import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ListContainer } from "./ListContainer";
import { ExperienceItem } from "@/global";

const mockExperience: ExperienceItem = {
    key: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Berlin, Germany",
    date: "2023-2024",
    description: "Worked on frontend development",
    details: [],
    techStack: [],
    link: "",
    logo: "logo.png",
    type: "Full-time",
    isCurrent: false,
};

describe("ListContainer", () => {
    it("renders items in single column layout", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ListContainer
                        items={[mockExperience]}
                        type="experience"
                        layout="single"
                    />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Software Engineer @ Tech Corp")).toBeInTheDocument();
    });

    it("renders items in grid layout", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ListContainer
                        items={[mockExperience]}
                        type="experience"
                        layout="grid"
                    />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Software Engineer @ Tech Corp")).toBeInTheDocument();
    });
});
