export const SubHeading = ({ text, icon }: { text: string; icon?: string }) => {
    return (
        <h4 className="text-portfolio-green text-portfolio-h3 font-lunasima">
            {text} {icon || ""}
        </h4>
    );
};
