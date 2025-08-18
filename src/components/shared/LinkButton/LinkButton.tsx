import { IconButton } from "../IconButton/IconButton";
import { ExternalLink } from "lucide-react";

export const LinkButton = ({
    link,
    disabled,
}: {
    link: string;
    disabled?: boolean;
}) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline text-left transition-all duration-500"
        title={`Open ${link} in new tab`}
    >
        <IconButton text="Link" disabled={disabled}>
            <ExternalLink size={24} />
        </IconButton>
    </a>
);
