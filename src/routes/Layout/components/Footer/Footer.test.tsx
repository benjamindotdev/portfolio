import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../../contexts/ThemeContext";
import type { Social, Contact } from "../../../../global";

const mockSocials: Social[] = [
    {
        name: "github",
        link: "",
        image: "",
        key: 1,
    },
    {
        name: "linkedin",
        link: "",
        image: "",
        key: 2,
    },
];

const mockContacts: Contact[] = [
    {
        name: "email",
        link: "",
        icon: "",
        key: 1,
    },
    {
        name: "phone",
        link: "",
        icon: "",
        key: 2,
    },
];

test("renders the Footer component with provided props", () => {
    render(
        <ThemeProvider>
            <BrowserRouter>
                <Footer socials={mockSocials} contacts={mockContacts} />
            </BrowserRouter>
        </ThemeProvider>
    );
    expect(screen.getByAltText("github")).toBeInTheDocument();
    expect(screen.getByAltText("linkedin")).toBeInTheDocument();
    expect(screen.getByAltText("email")).toBeInTheDocument();
    expect(screen.getByAltText("phone")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(6); // 2 flags + 4 icons
});

test("renders the Footer component with different text", () => {
    render(
        <ThemeProvider>
            <BrowserRouter>
                <Footer
                    socials={[
                        {
                            name: "facebook",
                            link: "",
                            image: "",
                            key: 1,
                        },
                    ]}
                    contacts={[
                        {
                            name: "email",
                            link: "",
                            icon: "",
                            key: 1,
                        },
                    ]}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
    expect(screen.getByAltText("facebook")).toBeInTheDocument();
    expect(screen.getByAltText("email")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(4); // 2 flags + 2 icons
});
