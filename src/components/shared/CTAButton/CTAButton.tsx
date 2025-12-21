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
            className="px-4 md:px-6 py-3 w-full md:w-auto md:max-w-[200px] flex flex-row justify-between bg-transparent border-2 border-gray-500 text-gray-500 dark:border-gray-300 dark:text-gray-300 hover:border-portfolio-green hover:text-portfolio-green dark:hover:border-portfolio-green dark:hover:text-portfolio-green transition-all rounded-lg font-lunasima text-lg items-center gap-3 group"
        >
            <span className="group-hover:text-portfolio-green text-base md:text-xl text-nowrap">{text}</span>
            <Icon className="w-5 h-5 transition-colors group-hover:text-portfolio-green" />
        </button>
    );
};
