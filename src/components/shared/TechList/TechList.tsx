import { useRef } from "react";
import { SubHeading } from "../SubHeading/SubHeading";
import { TechLogoImage } from "../TechLogoImage/TechLogoImage";
import type { Tech } from "@/global";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export const TechList = ({
    techs,
    subHeading,
    logoClassName,
    className,
    itemClassName,
    enableTicker,
}: {
    techs: Tech[];
    subHeading?: string;
    logoClassName?: string;
    className?: string;
    itemClassName?: string;
    enableTicker?: boolean;
}) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [isClient, setIsClient] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Active if explicitly enabled OR (on mobile)
    const isTickerLayout = enableTicker || (isClient && isMobile);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (!isTickerLayout || !listRef.current) return;

        const checkScroll = () => {
            if (listRef.current && listRef.current.parentElement) {
                const scrollWidth = listRef.current.scrollWidth;
                const containerWidth = listRef.current.clientWidth;
                // Only animate if content overflows
                setShouldAnimate(scrollWidth > containerWidth);
            }
        };

        // Initial check
        checkScroll();
        const observer = new ResizeObserver(checkScroll);
        if (listRef.current) observer.observe(listRef.current);

        return () => observer.disconnect();
    }, [isTickerLayout, techs]);

    // State to pause animation indefinitely after interaction
    const [paused, setPaused] = useState(false);
    const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);

    // JS Animation Loop
    useEffect(() => {
        if (!isTickerLayout || !shouldAnimate || paused || !listRef.current) return;

        let animationId: number;
        const list = listRef.current;
        let direction = 1; // 1 for right, -1 for left
        const speed = 0.5; // pixels per frame

        // Initialize direction: check if we are at the end
        if (list.scrollLeft >= list.scrollWidth - list.clientWidth - 1) {
            direction = -1;
        }

        const animate = () => {
            // Check bounds and reverse direction
            // Allow 1px buffer for float precision issues
            if (direction === 1 && list.scrollLeft >= list.scrollWidth - list.clientWidth - 1) {
                direction = -1;
            } else if (direction === -1 && list.scrollLeft <= 0) {
                direction = 1;
            }

            list.scrollLeft += direction * speed;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isTickerLayout, shouldAnimate, paused]);

    const handleTechToggle = (index: number) => {
        setPaused(true);
        setActiveTechIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className={`flex flex-col gap-4 ${isTickerLayout ? "w-full relative" : ""} ${isTickerLayout && !shouldAnimate ? "items-center" : ""}`}>
            {subHeading && <SubHeading text={subHeading} />}
            
            {/* Fade masks for ticker */}
            {isTickerLayout && shouldAnimate && (
                <>
                    <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-white dark:from-portfolio-navy to-transparent pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-white dark:from-portfolio-navy to-transparent pointer-events-none" />
                </>
            )}

            <ul 
                ref={listRef}
                className={
                    isTickerLayout 
                        ? `flex flex-nowrap items-center gap-8 w-full pl-4 pr-4 overflow-x-auto overflow-y-hidden scrollbar-hide`
                        : className || "flex flex-wrap flex-row justify-start items-center text-portfolio-h3 gap-8"
                }
                style={isTickerLayout ? { msOverflowStyle: 'none', scrollbarWidth: 'none' } : {}}
                onTouchStart={() => isTickerLayout && setPaused(true)}
                onMouseEnter={() => isTickerLayout && setPaused(true)}
            >
                {techs &&
                    techs.map((tech, index) => (
                        <TechLogoImage
                            image={tech.image}
                            name={tech.name}
                            link={tech.link}
                            disableLink={isTickerLayout}
                            // Use unique key since we aren't duplicating
                            key={tech.key || index}
                            className={`${logoClassName || ""} ${tech.className || ""}`.trim()}
                            containerClassName={isTickerLayout ? "shrink-0" : itemClassName}
                            isActive={isTickerLayout ? activeTechIndex === index : undefined}
                            onToggle={isTickerLayout ? () => handleTechToggle(index) : undefined}
                        />
                    ))}
            </ul>
        </div>
    );
};
