import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { NotFound } from "./NotFound";

describe("NotFound", () => {
    it("renders 404 page with correct content", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        // Check for 404 text
        expect(screen.getByText("404", { selector: "strong" })).toBeInTheDocument();
        expect(screen.getByText("Page Not Found")).toBeInTheDocument();

        // Check for heading
        expect(screen.getByText("Oops! Page Not Found")).toBeInTheDocument();

        // Check for description
        expect(
            screen.getByText(/The page you're looking for doesn't exist or has been moved/)
        ).toBeInTheDocument();

        // Check for home link
        const homeLink = screen.getByRole("link", { name: /Go Back Home/i });
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute("href", "/");
    });
});
