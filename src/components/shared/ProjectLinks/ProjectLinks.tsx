import { GitButton } from "../GitButton/GitButton";
import { LinkButton } from "../LinkButton/LinkButton";

type Status = "completed" | "in progress" | "planning";

export const ProjectLinks = ({
    repoLink,
    deployedLink,
    status,
}: {
    repoLink: string;
    deployedLink: string;
    status: Status;
}) => {
    const statusIcons: Record<Status, string> = {
        completed: "✅",
        "in progress": "🚧",
        planning: "📝",
    };

    return (
        <article className="flex justify-end items-center gap-4">
            <p className="text-portfolio-text text-slate-700 dark:text-portfolio-white">
                {status[0].toLocaleUpperCase() +
                    status.slice(1, status.length) +
                    " " +
                    statusIcons[status]}
            </p>
            <LinkButton
                link={deployedLink || ""}
                disabled={deployedLink ? false : true}
            />
            <GitButton repoLink={repoLink || ""} disabled={repoLink ? false : true} />
        </article>
    );
};
