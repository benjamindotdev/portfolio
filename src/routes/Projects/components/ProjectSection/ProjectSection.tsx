import { Project } from "../../../../global";
import { ListContainer } from "../../../../components/shared/ListContainer/ListContainer";

export const ProjectSection = ({
    status,
    icon,
    projects,
}: {
    status: string;
    icon: string;
    projects: Project[];
}) => {
    return (
        <section className="flex flex-col justify-center items-start gap-8">
            <ListContainer
                items={projects}
                type="project"
                layout="grid"
            />
        </section>
    );
};
