import { useTheme } from "../../../contexts/ThemeContext";

export const SkillBadge = ({ skill }: { skill: string }) => {
    const { theme } = useTheme();

    return (
        <div
            className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap ${theme === "dark"
                    ? "bg-zinc-800 border border-zinc-600 text-white"
                    : "bg-slate-200 border border-slate-400 text-slate-700"
                }`}
        >
            Skill: {skill}
        </div>
    );
};
