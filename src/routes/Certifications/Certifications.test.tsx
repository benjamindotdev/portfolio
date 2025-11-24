import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Certifications } from "./Certifications";
import { Certification } from "../../global";
import { BrowserRouter } from "react-router-dom";

test("loads and displays certifications", async () => {
    const mockCertifications: Certification[] = [
        {
            key: 1,
            name: "AWS",
            logo: "",
            company: "",
            location: "Remote",
            description: "https://aws.amazon.com/",
            link: "https://aws.amazon.com/",
            category: "Professional Certifications",
            level: "Specialization",
            date: "January 2024",
        },
        {
            key: 2,
            name: "Google Cloud",
            logo: "",
            company: "",
            location: "Remote",
            description: "https://cloud.google.com/",
            link: "https://cloud.google.com/",
            category: "Professional Certifications",
            level: "Specialization",
            date: "February 2024",
        },
        {
            key: 3,
            name: "Microsoft Azure",
            logo: "",
            company: "",
            location: "Remote",
            description: "https://azure.microsoft.com/",
            link: "https://azure.microsoft.com/",
            category: "Skills Courses",
            level: "Short Course",
            date: "March 2024",
        },
        {
            key: 4,
            name: "CompTIA Security+",
            logo: "",
            company: "",
            location: "Remote",
            description: "https://www.comptia.org/certifications/security",
            link: "https://www.comptia.org/certifications/security",
            category: "Professional Certifications",
            level: "Specialization",
            date: "April 2024",
        },
    ];

    render(
        <BrowserRouter>
            <Certifications certifications={mockCertifications} />
        </BrowserRouter>
    );

    const desc1 = await screen.findByText("https://aws.amazon.com/");
    const desc2 = await screen.findByText("https://cloud.google.com/");
    const desc3 = await screen.findByText("https://azure.microsoft.com/");
    const desc4 = await screen.findByText(
        "https://www.comptia.org/certifications/security"
    );

    expect(desc1).toBeInTheDocument();
    expect(desc2).toBeInTheDocument();
    expect(desc3).toBeInTheDocument();
    expect(desc4).toBeInTheDocument();
});
