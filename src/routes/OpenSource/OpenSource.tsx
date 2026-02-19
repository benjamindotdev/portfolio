import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { Project } from "@/global";
import { ProjectList } from "./components/ProjectList/ProjectList";
import { MobileProjectCard } from "./components/MobileProjectCard/MobileProjectCard";

export const OpenSource = ({ projects }: { projects?: Project[] }) => {
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

    // Combine for mobile view
    const allProjects = [...createdProjects, ...contributedProjects];

    return (
        <>
            <div className="md:hidden w-full h-full">
                <PageContainer id="opensource-mobile" layout="scroll">
                    {allProjects.map((project) => (
                        <MobileProjectCard key={project.key} project={project} />
                    ))}
                </PageContainer>
            </div>
            <div className="hidden md:block w-full h-full">
                <PageContainer id="opensource-desktop">
                    <div className="flex-1 flex flex-col gap-8">
                        {createdProjects.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <ProjectList projects={createdProjects} />
                            </div>
                        )}
                        
                        {contributedProjects.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <ProjectList projects={contributedProjects} />
                            </div>
                        )}
                    </div>
                </PageContainer>
            </div>
        </>
    );
};
