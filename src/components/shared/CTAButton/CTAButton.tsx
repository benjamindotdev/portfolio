import { LucideIcon } from "lucide-react";

export const CTAButton = ({
    onClick,
    text,
    icon: Icon,
}: {
    onClick: () => void;
    text: string;
    icon: LucideIcon;
}) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-transparent border-2 border-portfolio-white text-portfolio-white hover:border-portfolio-green transition-all rounded-lg font-lunasima text-lg flex items-center gap-3 group"
        >
            <span>{text}</span>
            <Icon className="w-5 h-5 transition-colors group-hover:text-portfolio-green" />
        </button>
    );
};
