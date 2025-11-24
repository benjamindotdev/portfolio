import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import type { Project } from "../../global";
import { FreelanceCard } from "./components/FreelanceCard/FreelanceCard";

export const Freelance = ({ projects }: { projects?: Project[] }) => {
    // Filter for freelance projects only
    const freelanceProjects = projects
        ?.filter((project) => project.status === "completed" && project.type === "freelance")
        .sort((a, b) => a.key - b.key) || [];

    return (
        <PageContainer id="freelance">
            <PageContent>
                <div className="h-full w-full flex items-stretch justify-center p-4 md:p-8">
                    <div className="w-full flex flex-col gap-8">
                        {freelanceProjects.map((project) => (
                            <FreelanceCard key={project.key} project={project} />
                        ))}
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
};
