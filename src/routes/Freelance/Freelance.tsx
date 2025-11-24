import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { Project } from "@/global";
import { FreelanceCard } from "./components/FreelanceCard/FreelanceCard";

export const Freelance = ({ projects }: { projects?: Project[] }) => {
    // Filter for freelance projects only
    const freelanceProjects = projects
        ?.filter((project) => project.status === "completed" && project.type === "freelance")
        .sort((a, b) => a.key - b.key) || [];

    return (
        <PageContainer id="freelance">
            {freelanceProjects.map((project) => (
                <FreelanceCard key={project.key} project={project} />
            ))}
        </PageContainer>
    );
};
