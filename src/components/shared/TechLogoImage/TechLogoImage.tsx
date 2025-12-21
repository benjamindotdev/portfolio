import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@/contexts/ThemeContext";

export const TechLogoImage = ({
    image,
    name,
    link,
}: {
    image: string | { lightImage: string; darkImage: string };
    name: string;
    link: string;
}) => {
    const { theme } = useTheme();
    const isReactLogo = name === "React";
    const needsWhiteBorder = ["Next.js", "shadcn"].includes(name);
    const isRoundBorder = name === "Next.js";

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    return (
        <li className="list-none flex flex-col items-center justify-center">
            <Link
                to={link}
                target="_blank"
                rel="noreferrer"
                className="relative group inline-flex flex-col items-center justify-center"
            >
                <LazyLoadImage
                    className={`h-icon-s w-auto max-w-24 object-contain transition-all duration-500 group-hover:scale-125 group-hover:translate-y-[-10px] ${isReactLogo ? "animate-rotate" : ""} ${needsWhiteBorder && theme === "dark" ? `border border-white ${isRoundBorder ? "rounded-full" : "rounded-sm"}` : ""}`}
                    src={imageSrc}
                    alt={name}
                    loading="lazy"
                />
                <p className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-slate-700 dark:text-portfolio-white text-portfolio-text text-center whitespace-nowrap">
                    {name}
                </p>
            </Link>
        </li>
    );
};
