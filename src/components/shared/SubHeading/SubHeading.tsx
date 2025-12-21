export const SubHeading = ({ text, icon, className = "" }: { text: string; icon?: string; className?: string }) => {
    return (
        <h4 className={`text-portfolio-green md:text-portfolio-h3 font-satoshi tracking-wide ${className}`.trim()}>
            {text} {icon || ""}
        </h4>
    );
};
