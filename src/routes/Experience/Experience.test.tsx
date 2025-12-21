import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { Experience } from "./Experience";
import { ExperienceItem } from "@/global";

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
    expect(screen.getAllByText("Web Developer @ Tech Solutions")[0]).toBeInTheDocument();
    expect(screen.getAllByText("September 2024 - Present")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Developing web applications using modern technologies.")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Current")[0]).toBeInTheDocument();
});
