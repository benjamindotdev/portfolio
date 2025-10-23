export const PageTitle = ({
    text,
    strongText,
    main = false,
    small = false,
    icon,
}: {
    text: string;
    strongText?: string;
    main?: boolean;
    small?: boolean;
    icon?: string;
}) => {
    const sizeClass = small
        ? "text-2xl md:text-3xl lg:text-4xl"
        : "text-4xl md:text-5xl lg:text-6xl";

    return (
        <h2 className={`p-0 m-0 ${sizeClass} text-portfolio-cyan font-lunasima`}>
            <strong className="text-portfolio-white">{text}</strong>
            <span className={`${main ? "text-portfolio-green text-[larger] drop-shadow-[0px_0px_20px_black]" : ""}`}>
                {strongText ? ` ${strongText}` : ""} {icon}
            </span>
        </h2>
    );
};
