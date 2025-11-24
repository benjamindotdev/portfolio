import { useTheme } from "../../../contexts/ThemeContext";

export const Badge = ({
    text,
    variant = "default"
}: {
    text: string;
    variant?: "default" | "current"
}) => {
    const { theme } = useTheme();

    if (variant === "current") {
        return (
            <span className="px-3 py-1.5 rounded-md text-xs whitespace-nowrap bg-green-600 text-green-100">
                {text}
            </span>
        );
    }

    return (
        <span
            className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap ${theme === "dark"
                    ? "bg-zinc-800 border border-zinc-600 text-white"
                    : "bg-slate-200 border border-slate-400 text-slate-700"
                }`}
        >
            {text}
        </span>
    );
};
