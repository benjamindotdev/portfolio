import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import type { Project } from "../../global";
import { ProjectList } from "./components/ProjectList/ProjectList";

export const Projects = ({ projects }: { projects?: Project[] }) => {
    // Sort by key (ascending order)
    const sortedProjects = projects
        ?.filter((project) => project.status === "completed")
        .sort((a, b) => a.key - b.key) || [];

    return (
        <PageContainer id="projects">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                    <ProjectList projects={sortedProjects} />
                </div>
            </div>
        </PageContainer>
    );
};
