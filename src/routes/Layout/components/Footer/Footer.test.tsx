import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
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
        <BrowserRouter>
            <Footer socials={mockSocials} contacts={mockContacts} />
        </BrowserRouter>
    );
    expect(screen.getByText("github")).toBeInTheDocument();
    expect(screen.getByText("linkedin")).toBeInTheDocument();
    expect(screen.getByText("email")).toBeInTheDocument();
    expect(screen.getByText("phone")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(4);
});

test("renders the Footer component with different text", () => {
    render(
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
    );
    expect(screen.getByText("facebook")).toBeInTheDocument();
    expect(screen.getByText("email")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
});
