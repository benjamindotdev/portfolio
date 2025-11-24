import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { Experience } from "./Experience";
import { ExperienceItem } from "../../global";

const mockExperience: ExperienceItem[] = [
    {
        key: 0,
        title: "Web Developer",
        company: "Tech Solutions",
        location: "Berlin, Germany",
        date: "September 2024 - Present",
        description: "Developing web applications using modern technologies.",
        techStack: ["React", "TypeScript", "Node.js"],
        logo: "logos/tech.svg",
        type: "Full-time",
        isCurrent: true,
    },
];

test("renders experience page with correct content", () => {
    render(
        <MemoryRouter>
            <ThemeProvider>
                <Experience experience={mockExperience} />
            </ThemeProvider>
        </MemoryRouter>
    );

    // Check for the main content
    expect(screen.getByText("Web Developer @ Tech Solutions")).toBeInTheDocument();
    expect(screen.getByText("September 2024 - Present")).toBeInTheDocument();
    expect(screen.getByText("Developing web applications using modern technologies.")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
});
