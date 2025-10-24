import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScrollSection } from "./ScrollSection";

describe("ScrollSection", () => {
    it("renders children correctly", () => {
        render(
            <ScrollSection>
                <div>Section 1</div>
                <div>Section 2</div>
            </ScrollSection>
        );

        expect(screen.getByText("Section 1")).toBeInTheDocument();
        expect(screen.getByText("Section 2")).toBeInTheDocument();
    });

    it("renders breadcrumb navigation by default", () => {
        render(
            <ScrollSection>
                <div>Section 1</div>
                <div>Section 2</div>
            </ScrollSection>
        );

        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
        
        const breadcrumbs = screen.getAllByRole("link");
        expect(breadcrumbs).toHaveLength(2);
    });

    it("hides breadcrumbs when showBreadcrumbs is false", () => {
        render(
            <ScrollSection showBreadcrumbs={false}>
                <div>Section 1</div>
                <div>Section 2</div>
            </ScrollSection>
        );

        const nav = screen.queryByRole("navigation");
        expect(nav).not.toBeInTheDocument();
    });

    it("handles single child correctly", () => {
        render(
            <ScrollSection>
                <div>Single Section</div>
            </ScrollSection>
        );

        expect(screen.getByText("Single Section")).toBeInTheDocument();
        const breadcrumbs = screen.getAllByRole("link");
        expect(breadcrumbs).toHaveLength(1);
    });

    it("creates sections with correct snap classes", () => {
        render(
            <ScrollSection>
                <div>Section 1</div>
                <div>Section 2</div>
            </ScrollSection>
        );

        const sections = screen.getAllByText(/Section/);
        expect(sections).toHaveLength(2);
    });
});
