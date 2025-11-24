import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { FreelanceCard } from "./FreelanceCard";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Project } from "@/global";

const mockProject: Project = {
    key: 1,
    name: "Test Project",
    description: "Test description",
    subTitle: "Test subtitle",
    image: "test-image.png",
    techStack: ["React", "TypeScript"],
    deployedLink: "https://test.com",
    repoLink: "https://github.com/test",
    status: "completed",
    client: {
        name: "Test Client",
        position: "CEO",
        image: "client.jpg",
        linkedIn: "https://linkedin.com/in/testclient",
        testimonial: "Great work!",
        needed: "Need solution",
        solution: "Provided solution",
        challenge: "Overcame challenge"
    }
};

describe("FreelanceCard", () => {
    it("renders project name", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    it("renders subtitle and description", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        expect(screen.getByText("Test subtitle")).toBeInTheDocument();
        expect(screen.getByText("Test description")).toBeInTheDocument();
    });

    it("renders client information when provided", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        expect(screen.getByText("Test Client")).toBeInTheDocument();
        expect(screen.getByText("CEO")).toBeInTheDocument();
        expect(screen.getByText('"Great work!"')).toBeInTheDocument();
    });

    it("renders client needs, solution, and challenge", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        expect(screen.getByText("Need solution")).toBeInTheDocument();
        expect(screen.getByText("Provided solution")).toBeInTheDocument();
        expect(screen.getByText("Overcame challenge")).toBeInTheDocument();
    });

    it("renders without client information", () => {
        const projectWithoutClient = {
            ...mockProject,
            client: undefined
        };

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={projectWithoutClient} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        expect(screen.getByText("Test Project")).toBeInTheDocument();
        expect(screen.queryByText("Test Client")).not.toBeInTheDocument();
    });

    it("renders with deployed link", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        // LinkButton should be rendered
        const links = screen.getAllByRole("link");
        expect(links.length).toBeGreaterThan(0);
    });

    it("applies hover effect classes", () => {
        const { container } = render(
            <BrowserRouter>
                <ThemeProvider>
                    <FreelanceCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );
        
        const card = container.querySelector("div.hover\\:border-portfolio-green");
        expect(card).toBeInTheDocument();
    });
});
