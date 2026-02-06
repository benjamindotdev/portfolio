import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { Project } from "@/global";
import { ProjectList } from "./components/ProjectList/ProjectList";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";

export const Projects = ({ projects }: { projects?: Project[] }) => {
    // Sort by key (ascending order)
    const sortedProjects = projects
        ?.filter((project) => project.status === "completed" && project.type === "personal")
        .sort((a, b) => a.key - b.key) || [];

    const createdProjects = sortedProjects.filter(project => 
        !project.createdBy || project.createdBy.name === "Benjamin"
    );

    const contributedProjects = sortedProjects.filter(project => 
        project.createdBy && project.createdBy.name !== "Benjamin"
    );

    return (
        <PageContainer id="projects">
            <div className="flex-1 flex flex-col gap-8">
                {createdProjects.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <SubHeading text="Created" />
                        <ProjectList projects={createdProjects} />
                    </div>
                )}
                
                {contributedProjects.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <SubHeading text="Contributed To" />
                        <ProjectList projects={contributedProjects} />
                    </div>
                )}
            </div>
        </PageContainer>
    );
};
