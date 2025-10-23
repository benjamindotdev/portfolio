import type { Project } from "../../../../global";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const ProjectList = ({
    projects,
}: {
    projects: Project[];
}) => {
    return (
        <div className="w-full h-full flex flex-row flex-wrap justify-between gap-8">
            {projects.map((item) => (
                <ProjectCard project={item} key={item.key} />
            ))}
        </div>
    );
};
