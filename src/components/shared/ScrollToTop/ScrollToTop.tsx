import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-portfolio-green text-portfolio-navy rounded-full shadow-lg hover:bg-portfolio-cyan hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-white focus:ring-offset-2 focus:ring-offset-portfolio-navy"
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    );
};
