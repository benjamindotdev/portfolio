import type { Project } from "../../../../global";
import { FreelanceCard } from "../FreelanceCard/FreelanceCard";

export const FreelanceList = ({
    projects,
}: {
    projects: Project[];
}) => {
    return (
        <div className="w-full h-full flex flex-col gap-4">
            {projects.map((item) => (
                <FreelanceCard project={item} key={item.key} />
            ))}
        </div>
    );
};
