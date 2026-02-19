export const SubHeading = ({ text, icon, className = "", url }: { text: string; icon?: string; className?: string; url?: string }) => {
    const content = (
        <h4 className={`text-portfolio-green md:text-portfolio-h3 font-satoshi tracking-wide ${className} ${url ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`.trim()}>
            {text} {icon || ""}
        </h4>
    );

    if (url) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
};
