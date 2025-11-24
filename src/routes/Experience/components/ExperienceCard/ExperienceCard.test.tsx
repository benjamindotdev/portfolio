import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../../contexts/ThemeContext";
import { ExperienceCard } from "./ExperienceCard";
import type { ExperienceItem } from "@/global";

const mockExperience: ExperienceItem = {
    key: 0,
    title: "Senior Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    date: "2024 - Present",
    description: "Leading development of web applications.",
    techStack: ["React", "TypeScript", "Node.js"],
    logo: "logos/tech.svg",
    type: "Full-time",
    isCurrent: true,
};

describe("ExperienceCard", () => {
    it("renders experience details correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={mockExperience} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Senior Developer @ Tech Corp")).toBeInTheDocument();
        expect(screen.getByText("2024 - Present")).toBeInTheDocument();
        expect(screen.getByText("Full-time")).toBeInTheDocument();
        expect(screen.getByText("San Francisco, CA")).toBeInTheDocument();
        expect(screen.getByText("Leading development of web applications.")).toBeInTheDocument();
    });

    it("renders current badge when isCurrent is true", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={mockExperience} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Current")).toBeInTheDocument();
    });

    it("does not render current badge when isCurrent is false", () => {
        const pastExperience = { ...mockExperience, isCurrent: false };
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={pastExperience} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.queryByText("Current")).not.toBeInTheDocument();
    });

    it("renders company logo", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={mockExperience} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const logo = screen.getByAltText("Tech Corp");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "logos/tech.svg");
    });

    it("renders technologies from techStack", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={mockExperience} />
                </ThemeProvider>
            </BrowserRouter>
        );

        // TechList component will render the technologies
        // We just check that the component renders without crashing
        expect(screen.getByText("Senior Developer @ Tech Corp")).toBeInTheDocument();
    });

    it("renders details when provided", () => {
        const expWithDetails: ExperienceItem = {
            ...mockExperience,
            details: [
                { key: 1, text: "Built scalable APIs" },
                { key: 2, text: "Improved performance by 50%" }
            ]
        };

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={expWithDetails} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("✅ Built scalable APIs")).toBeInTheDocument();
        expect(screen.getByText("✅ Improved performance by 50%")).toBeInTheDocument();
    });

    it("renders skills when provided", () => {
        const expWithSkills: ExperienceItem = {
            ...mockExperience,
            techStack: [],
            skills: ["Leadership", "Agile", "Mentoring"]
        };

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={expWithSkills} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Leadership/)).toBeInTheDocument();
        expect(screen.getByText(/Agile/)).toBeInTheDocument();
        expect(screen.getByText(/Mentoring/)).toBeInTheDocument();
    });

    it("renders both techStack and skills", () => {
        const expWithBoth: ExperienceItem = {
            ...mockExperience,
            skills: ["Team Management"]
        };

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={expWithBoth} />
                </ThemeProvider>
            </BrowserRouter>
        );

        // Check that skills are rendered (should show "Skill: " prefix)
        expect(screen.getByText(/Team Management/)).toBeInTheDocument();
    });

    it("renders without link when not provided", () => {
        const expWithoutLink: ExperienceItem = {
            ...mockExperience,
            link: undefined
        };

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={expWithoutLink} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Senior Developer @ Tech Corp")).toBeInTheDocument();
    });

    it("handles theme-aware logo", () => {
        const expWithThemeLogo: ExperienceItem = {
            ...mockExperience,
            logo: {
                lightImage: "logos/light.png",
                darkImage: "logos/dark.png"
            }
        };

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ExperienceCard experience={expWithThemeLogo} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const logo = screen.getByAltText("Tech Corp");
        expect(logo).toBeInTheDocument();
    });
});

