import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ExperienceList } from "./ExperienceList";
import type { ExperienceItem } from "../../../../global";

// Mock the universal ListContainer component
jest.mock("../../../../components/shared/ListContainer/ListContainer", () => ({
    ListContainer: ({ items, type, layout }: any) => (
        <div data-testid="list-container" data-type={type} data-layout={layout}>
            {items.map((item: ExperienceItem) => (
                <div key={item.key} data-testid="experience-item">
                    {item.title}
                </div>
            ))}
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
        expect(screen.getByTestId("list-container")).toBeInTheDocument();
    });

    it("passes correct props to ListContainer", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={mockExperience} />
            </BrowserRouter>
        );
        const container = screen.getByTestId("list-container");
        expect(container).toHaveAttribute("data-type", "experience");
        expect(container).toHaveAttribute("data-layout", "grid");
    });

    it("renders experience items in reverse order", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={mockExperience} />
            </BrowserRouter>
        );
        const items = screen.getAllByTestId("experience-item");
        expect(items[0]).toHaveTextContent("Junior Developer");
        expect(items[1]).toHaveTextContent("Senior Developer");
    });

    it("handles empty experience list", () => {
        render(
            <BrowserRouter>
                <ExperienceList experience={[]} />
            </BrowserRouter>
        );
        const container = screen.getByTestId("list-container");
        expect(container).toBeInTheDocument();
        expect(screen.queryByTestId("experience-item")).not.toBeInTheDocument();
    });
});
