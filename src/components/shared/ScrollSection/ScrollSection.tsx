import { useState, useEffect, ReactNode } from "react";

export const ScrollSection = ({
    children,
    showBreadcrumbs = true,
}: {
    children: ReactNode[] | ReactNode;
    showBreadcrumbs?: boolean;
}) => {
    const [activeSection, setActiveSection] = useState(0);

    // Ensure children is always an array
    const childrenArray = Array.isArray(children) ? children : [children];

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (!scrollContainer) return;

        const handleScroll = () => {
            const scrollPosition = scrollContainer.scrollTop;
            const viewportHeight = window.innerHeight;
            const sectionIndex = Math.round(scrollPosition / viewportHeight);
            setActiveSection(sectionIndex);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="h-full overflow-hidden snap-y snap-mandatory scrollbar-hide relative">
            {/* Breadcrumb Navigation */}
            {showBreadcrumbs && (
                <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
                    {childrenArray.map((_, index) => (
                        <a
                            key={index}
                            href={`#section-${index}`}
                            className={`w-3 h-3 rounded-full transition-colors ${activeSection === index
                                ? 'bg-portfolio-green'
                                : 'bg-white/30 hover:bg-white/60'
                                }`}
                            aria-label={`Section ${index + 1}`}
                        />
                    ))}
                </nav>
            )}

            <div className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide scroll-container">
                {childrenArray.map((child, index) => (
                    <section
                        key={index}
                        id={`section-${index}`}
                        className="h-full w-full snap-start snap-always flex items-center justify-center overflow-hidden"
                    >
                        {child}
                    </section>
                ))}
            </div>
        </div>
    );
};
