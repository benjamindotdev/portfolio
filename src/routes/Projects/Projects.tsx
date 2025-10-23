import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import type { Project } from "../../global";

export const Projects = ({ projects }: { projects?: Project[] }) => {
    const completedProjects = projects?.filter(
        (project) => project.status === "completed"
    ).sort((a, b) => a.key - b.key);

    return (
        <PageContainer id="projects">
            <PageContent>
                {completedProjects && completedProjects.length > 0 && (
                    <ProjectSection
                        status="completed"
                        icon="🎉"
                        projects={completedProjects}
                    />
                )}
            </PageContent>
        </PageContainer>
    );
};
