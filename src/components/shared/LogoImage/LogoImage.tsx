import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@/contexts/ThemeContext";

export const LogoImage = ({
    image,
    name,
    link,
    className,
    linkClassName,
    logoClassName,
}: {
    image: string | { lightImage: string; darkImage: string };
    name: string;
    link: string;
    className?: string;
    linkClassName?: string;
    logoClassName?: string;
}) => {
    const { theme } = useTheme();
    const isInternal = link.startsWith('/');

    // Determine which image to use
    const imageUrl = typeof image === 'string'
        ? image
        : theme === 'dark'
            ? image.darkImage
            : image.lightImage;

    return (
        <Link
            to={link}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer"}
            className={`group ${className || ""} ${linkClassName || ""}`.trim()}
            aria-label={name}
        >
            <LazyLoadImage
                className={`h-8 md:h-icon-s w-auto transition-all duration-300 hover:brightness-150 hover:drop-shadow-[0_0_8px_#2bf38b] text-black dark:text-white ${logoClassName || ""}`.trim()}
                src={imageUrl}
                alt={name}
                loading="lazy"
                style={{
                    filter: 'brightness(1)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(84%) sepia(29%) saturate(2180%) hue-rotate(83deg) brightness(97%) contrast(92%)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(1)';
                }}
            />
        </Link>
    );
};
