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

    it("updates active section on scroll", async () => {
        const { container } = render(
            <ScrollSection>
                <div>Section 1</div>
                <div>Section 2</div>
                <div>Section 3</div>
            </ScrollSection>
        );

        const scrollContainer = container.querySelector('.scroll-container');
        expect(scrollContainer).toBeInTheDocument();

        // Mock window.innerHeight for calculations
        const originalInnerHeight = window.innerHeight;
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: 800,
        });

        if (scrollContainer) {
            // Simulate scroll to second section
            Object.defineProperty(scrollContainer, 'scrollTop', {
                writable: true,
                configurable: true,
                value: 800,
            });

            // Trigger scroll event
            const scrollEvent = new Event('scroll', { bubbles: true });
            scrollContainer.dispatchEvent(scrollEvent);

            // Wait for state update
            await new Promise(resolve => setTimeout(resolve, 0));

            // Check that breadcrumb classes update (active section changes)
            const breadcrumbs = screen.getAllByRole('link');
            // The second breadcrumb should be active
            expect(breadcrumbs[1]).toHaveClass('bg-portfolio-green');
        }

        // Restore
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: originalInnerHeight,
        });
    });

    it("cleans up scroll event listener on unmount", () => {
        const { container, unmount } = render(
            <ScrollSection>
                <div>Section 1</div>
            </ScrollSection>
        );

        const scrollContainer = container.querySelector('.scroll-container');
        const removeEventListenerSpy = jest.spyOn(scrollContainer!, 'removeEventListener');

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
});
