import { useTheme } from "../../../contexts/ThemeContext";

export const ViewClientBadge = ({ linkedIn }: { linkedIn: string }) => {
    const { theme } = useTheme();

    return (
        <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap no-underline transition-colors duration-300 ${theme === "dark"
                    ? "bg-zinc-800 border border-zinc-600 text-white hover:text-portfolio-green"
                    : "bg-slate-200 border border-slate-400 text-slate-700 hover:text-portfolio-green"
                }`}
        >
            View Client
        </a>
    );
};
