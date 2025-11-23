import { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const fillColor = isHovered
        ? '#2bf38b' // portfolio-green
        : theme === 'dark' ? '#ffffff' : '#334155'; // portfolio-white : slate-700

    return (
        <svg
            viewBox="0 0 120 170"
            className="transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <rect x="20" y="20" width="40" height="40" rx="8" fill={fillColor} />
            <rect x="20" y="70" width="80" height="80" rx="8" fill={fillColor} />
        </svg>
    );
}
