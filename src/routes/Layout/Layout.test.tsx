import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "./Layout";
import { Link, Social, Contact } from "@/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";

test("renders the layout component", async () => {
    const mockLinks: Link[] = [
        { key: 1, title: "Home", route: "/" },
        { key: 2, title: "About", route: "/about" },
        { key: 3, title: "Projects", route: "/projects" },
        { key: 4, title: "Certifications", route: "/certifications" },
    ];

    const mockSocials: Social[] = [
        { key: 1, name: "GitHub", link: "https://github.com", image: "" },
        { key: 2, name: "LinkedIn", link: "https://linkedin.com", image: "" },
    ];

    const mockContacts: Contact[] = [
        { key: 1, name: "Email", link: "mailroute", icon: "" },
        { key: 2, name: "Phone", link: "phoneroute", icon: "" },
    ];

    render(
        <ThemeProvider>
            <BrowserRouter>
                <Layout links={mockLinks} socials={mockSocials} contacts={mockContacts} />
            </BrowserRouter>
        </ThemeProvider>
    );

    const homeLink = await screen.findByText("Home");
    const aboutLink = await screen.findByText("About");
    const projectsLink = await screen.findByText("Projects");
    const certificationsLink = await screen.findByText("Certifications");
    const githubLink = await screen.findByAltText("GitHub");
    const linkedInLink = await screen.findByAltText("LinkedIn");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(certificationsLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();
});
