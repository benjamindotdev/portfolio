import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ExperienceList } from "./ExperienceList";
import type { ExperienceItem } from "@/global";

// Mock the ExperienceCard component
jest.mock("../ExperienceCard/ExperienceCard", () => ({
    ExperienceCard: ({ experience }: { experience: ExperienceItem }) => (
        <div data-testid="experience-card">
            {experience.title}
        </div>
    ),
}));

const mockExperience: ExperienceItem[] = [
    {
        key: 0,
        title: "Senior Developer",
        company: "Tech Company",
        location: "San Francisco",
        date: "2024 - Present",
        description: "Leading development of web applications.",
        techStack: ["React", "TypeScript"],
        logo: "logos/tech.svg",
        type: "Full-time",
        isCurrent: true,
    },
    {
        key: 1,
        title: "Junior Developer",
        company: "Startup Inc",
        location: "New York",
        date: "2022 - 2024",
        description: "Developed mobile applications.",
        techStack: ["React Native", "JavaScript"],
        logo: "logos/startup.svg",
        type: "Full-time",
        isCurrent: false,
    },
];

describe("ExperienceList", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={mockExperience} />
            </BrowserRouter>
        );
        const cards = screen.getAllByTestId("experience-card");
        expect(cards).toHaveLength(2);
    });

    it("renders all experience items", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={mockExperience} />
            </BrowserRouter>
        );
        expect(screen.getByText("Senior Developer")).toBeInTheDocument();
        expect(screen.getByText("Junior Developer")).toBeInTheDocument();
    });

    it("renders experience items in correct order", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={mockExperience} />
            </BrowserRouter>
        );
        const items = screen.getAllByTestId("experience-card");
        expect(items[0]).toHaveTextContent("Senior Developer");
        expect(items[1]).toHaveTextContent("Junior Developer");
    });

    it("handles empty experience list", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={[]} />
            </BrowserRouter>
        );
        const items = screen.queryAllByTestId("experience-card");
        expect(items).toHaveLength(0);
    });
});
