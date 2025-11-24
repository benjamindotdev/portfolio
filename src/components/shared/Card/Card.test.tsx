import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../contexts/ThemeContext";
import { Card } from "./Card";
import { ExperienceItem, Certification, Project } from "../../../global";

const mockExperience: ExperienceItem = {
    key: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Berlin, Germany",
    date: "2023-2024",
    description: "Worked on frontend development",
    details: [
        { key: 1, text: "Built React applications" },
        { key: 2, text: "Improved performance" }
    ],
    techStack: ["React", "TypeScript"],
    link: "https://techcorp.com",
    logo: "logo.png",
    type: "Full-time",
    isCurrent: false,
};

const mockCertification: Certification = {
    key: 1,
    name: "React Developer",
    logo: "react-logo.png",
    description: "Advanced React certification",
    link: "https://certification.com",
    company: "React Org",
    location: "Remote",
    category: "Professional Certifications",
    level: "Specialization",
    date: "January 2024",
};

const mockProject: Project = {
    key: 1,
    name: "My App",
    image: "app-logo.png",
    description: "A great application",
    status: "completed",
    techStack: ["React", "Node.js"],
    deployedLink: "https://myapp.com",
    repoLink: "https://github.com/user/myapp",
};

describe("Card", () => {
    it("renders experience card correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Card item={mockExperience} type="experience" />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Software Engineer @ Tech Corp")).toBeInTheDocument();
        expect(screen.getByText("Full-time, Berlin, Germany")).toBeInTheDocument();
        expect(screen.getByText("2023-2024")).toBeInTheDocument();
        expect(screen.getByText("Worked on frontend development")).toBeInTheDocument();
        expect(screen.getByText("✅ Built React applications")).toBeInTheDocument();
    });

    it("renders certification card correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Card item={mockCertification} type="certification" />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("React Developer")).toBeInTheDocument();
        expect(screen.getByText("React Org")).toBeInTheDocument();
        expect(screen.getByText("Remote")).toBeInTheDocument();
        expect(screen.getByText("Advanced React certification")).toBeInTheDocument();
    });

    it("renders project card correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Card item={mockProject} type="project" />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("My App")).toBeInTheDocument();
        expect(screen.getByText("A great application")).toBeInTheDocument();
        expect(screen.getByText("Completed")).toBeInTheDocument();
    });
});
