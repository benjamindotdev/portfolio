import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import type { Project } from "../../global";
import { ProjectList } from "./components/ProjectList/ProjectList";

export const Projects = ({ projects }: { projects?: Project[] }) => {
    // Sort by key (ascending order)
    const sortedProjects = projects
        ?.filter((project) => project.status === "completed")
        .sort((a, b) => a.key - b.key) || [];

    return (
        <PageContainer id="projects">
            <PageContent>
                <div className="h-full w-full flex items-stretch justify-center p-4 md:p-8">
                    <div className="w-full flex flex-col gap-4 md:gap-8">
                        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex-1">
                                <ProjectList projects={sortedProjects} />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
};
