import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import type { Project } from "../../global";
import { ClientDisplay } from "./components/ClientDisplay/ClientDisplay";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";

export const Freelance = ({ projects }: { projects?: Project[] }) => {
    // Filter for freelance projects only
    const freelanceProjects = projects
        ?.filter((project) => project.status === "completed" && project.type === "freelance")
        .sort((a, b) => a.key - b.key) || [];

    return (
        <PageContainer id="freelance">
            <PageContent>
                <div className="h-full w-full overflow-y-auto p-8 md:p-16">
                    <div className="max-w-5xl mx-auto flex flex-col gap-16">
                        {freelanceProjects.map((project) => (
                            <div key={project.key} className="flex flex-col gap-8">
                                <ProjectDetails project={project} />
                                {project.client && (
                                    <ClientDisplay
                                        name={project.client.name}
                                        position={project.client.position}
                                        image={project.client.image}
                                        testimonial={project.client.testimonial}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
};
