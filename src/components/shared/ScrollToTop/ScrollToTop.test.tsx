import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ScrollToTop } from './ScrollToTop';

describe('ScrollToTop', () => {
    beforeEach(() => {
        // Reset scroll position
        window.scrollY = 0;
    });

    it('should not render when scrollY is less than 300', () => {
        render(<ScrollToTop />);
        expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();
    });

    it('should render when scrollY is greater than 300', () => {
        render(<ScrollToTop />);

        // Simulate scroll
        Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
        fireEvent.scroll(window);

        expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument();
    });

    it('should scroll to top when clicked', () => {
        const scrollToMock = jest.fn();
        window.scrollTo = scrollToMock;

        render(<ScrollToTop />);

        // Make button visible
        Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
        fireEvent.scroll(window);

        const button = screen.getByRole('button', { name: /scroll to top/i });
        fireEvent.click(button);

        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });

    it('should have proper ARIA attributes', () => {
        render(<ScrollToTop />);

        // Make button visible
        Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
        fireEvent.scroll(window);

        const button = screen.getByRole('button', { name: /scroll to top/i });
        expect(button).toHaveAttribute('aria-label', 'Scroll to top');
        expect(button).toHaveAttribute('title', 'Scroll to top');
    });

    it('should cleanup scroll listener on unmount', () => {
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

        const { unmount } = render(<ScrollToTop />);
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

        removeEventListenerSpy.mockRestore();
    });
});
