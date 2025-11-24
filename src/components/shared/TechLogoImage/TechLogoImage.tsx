import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GraduationCap } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

export const TechLogoImage = ({
    image,
    name,
    link,
    isLearning,
}: {
    image: string | { lightImage: string; darkImage: string };
    name: string;
    link: string;
    isLearning?: boolean;
}) => {
    const { theme } = useTheme();
    const isReactLogo = name === "React";

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    return (
        <li>
            <Link
                to={link}
                target="_blank"
                rel="noreferrer"
                className={`relative group ${isLearning ? "opacity-75 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" : ""
                    }`}
            >
                {isLearning && (
                    <GraduationCap
                        size={20}
                        className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-slate-700 dark:text-portfolio-white text-portfolio-text text-center whitespace-nowrap group-hover:opacity-0 transition-opacity duration-500"
                    />
                )}
                <LazyLoadImage
                    className={`h-icon-s w-auto transition-all duration-500  group-hover:scale-125 group-hover:translate-y-[-10px] ${isReactLogo ? "animate-rotate" : ""}`}
                    src={imageSrc}
                    alt={name}
                    loading="lazy"
                />
                <p className="absolute -bottom-[30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-slate-700 dark:text-portfolio-white text-portfolio-text text-center whitespace-nowrap translate-y-[-10px]">
                    {name}
                </p>
            </Link>
        </li>
    );
};
