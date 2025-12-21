import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Freelance } from "./Freelance";
import type { Project } from "@/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";

describe("Freelance Component", () => {
    const mockProjects: Project[] = [
        {
            key: 0,
            name: "Test Freelance Project",
            image: "test.png",
            description: "Test freelance description",
            status: "completed",
            type: "freelance",
            techStack: ["React", "TypeScript"],
            deployedLink: "https://test.com",
            repoLink: "https://github.com/test/test",
        },
    ];

    it("renders the Freelance component with provided props", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Freelance projects={mockProjects} />
                </ThemeProvider>
            </BrowserRouter>
        );
        const elements = screen.getAllByText("Test Freelance Project");
        expect(elements.length).toBeGreaterThan(0);
    });

    it("filters and sorts freelance projects correctly", () => {
        const mixedProjects: Project[] = [
            {
                key: 2,
                name: "Freelance B",
                image: "b.png",
                description: "Second",
                status: "completed",
                type: "freelance",
                techStack: [],
            },
            {
                key: 1,
                name: "Personal Project",
                image: "p.png",
                description: "Personal",
                status: "completed",
                type: "personal",
                techStack: [],
            },
            {
                key: 0,
                name: "Freelance A",
                image: "a.png",
                description: "First",
                status: "completed",
                type: "freelance",
                techStack: [],
            },
        ];

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Freelance projects={mixedProjects} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const freelanceAElements = screen.getAllByText("Freelance A");
        expect(freelanceAElements.length).toBeGreaterThan(0);
        
        const freelanceBElements = screen.getAllByText("Freelance B");
        expect(freelanceBElements.length).toBeGreaterThan(0);

        expect(screen.queryByText("Personal Project")).not.toBeInTheDocument();
    });

    it("renders empty when no projects provided", () => {
        const { container } = render(
            <BrowserRouter>
                <ThemeProvider>
                    <Freelance projects={undefined} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(container.querySelector('[id="freelance-mobile"]')).toBeInTheDocument();
        expect(container.querySelector('[id="freelance-desktop"]')).toBeInTheDocument();
    });
});

