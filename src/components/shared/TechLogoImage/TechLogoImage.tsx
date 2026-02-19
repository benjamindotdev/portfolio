import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@/contexts/ThemeContext";
import { useAutoInvertDarkImage } from "@/hooks/useAutoInvertDarkImage";

export const TechLogoImage = ({
    image,
    name,
    link,
    className = "",
    containerClassName = "",
    disableLink = false,
    isActive: externalIsActive,
    onToggle,
}: {
    image?: string | { lightImage: string; darkImage: string };
    name: string;
    link: string;
    className?: string;
    containerClassName?: string;
    disableLink?: boolean;
    isActive?: boolean;
    onToggle?: () => void;
}) => {
    const { theme } = useTheme();
    const [internalIsActive, setInternalIsActive] = useState(false);
    
    const isControlled = typeof externalIsActive !== 'undefined';
    const isActive = isControlled ? externalIsActive : internalIsActive;

    const handleToggle = () => {
        if (onToggle) {
            onToggle();
        } else {
            setInternalIsActive(!internalIsActive);
        }
    };
    
    const isReactLogo = name === "React";
    const needsWhiteBorder = [ "shadcn", "dnd-kit", "tsup"].includes(name);
    const isRoundBorder = ["Next.js"].includes(name);
    const preventInversion = ["shadcn", "shadcn/ui", "Ora"].includes(name);

    const imageSrc = (() => {
        if (!image) return undefined;
        if (typeof image === "string") return image;
        return theme === "dark" ? image?.darkImage : image?.lightImage;
    })();

    const shouldInvert = useAutoInvertDarkImage(imageSrc || "") && !preventInversion;

    if (!imageSrc) return null;

    const activeClasses = isActive ? "opacity-20 grayscale" : "";
    const hoverClasses = "group-hover:opacity-20 group-hover:grayscale";
    
    // Combine active state with hover state
    const imageClasses = `h-6 md:h-8 w-auto max-w-24 object-contain transition-all duration-300 ${activeClasses} ${hoverClasses} ${isReactLogo ? "animate-rotate" : ""} ${needsWhiteBorder && theme === "dark" ? `border border-white ${isRoundBorder ? "rounded-full" : "rounded-sm"}` : ""} ${shouldInvert && theme === "dark" ? "brightness-0 invert" : ""} ${className}`.trim();

    const Content = (
        <>
            <LazyLoadImage
                className={imageClasses}
                src={imageSrc}
                alt={name}
                loading="lazy"
            />
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <p className="text-xs font-bold text-slate-900 dark:text-white text-center whitespace-nowrap drop-shadow-md">
                    {name}
                </p>
            </div>
        </>
    );

    return (
        <li className={`list-none flex flex-col items-center justify-center ${containerClassName}`.trim()}>
            {disableLink ? (
                <div 
                    className="relative group inline-flex flex-col items-center justify-center cursor-pointer p-4 -m-4"
                    onClick={handleToggle}
                >
                    {Content}
                </div>
            ) : (
                <Link
                    to={link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative group inline-flex flex-col items-center justify-center p-2 -m-2"
                >
                    {Content}
                </Link>
            )}
        </li>
    );
};

