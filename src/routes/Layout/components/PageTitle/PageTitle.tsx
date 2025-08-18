export const PageTitle = ({
    text,
    strongText,
    main = false,
    icon,
}: {
    text: string;
    strongText?: string;
    main?: boolean;
    icon?: string;
}) => {
    return (
        <h2 className="p-0 m-0 text-3xl text-portfolio-cyan font-lunasima">
            <strong className="text-portfolio-white">{text}</strong>
            <span className={`${main ? "text-portfolio-green text-[larger] drop-shadow-[0px_0px_20px_black]" : ""}`}>
                {strongText ? ` ${strongText}` : ""} {icon}
            </span>
        </h2>
    );
};
