import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project, Tech, Technology } from "../../../../global";
import { LinkButton } from "../../../../components/shared/LinkButton/LinkButton";
import { SubHeading } from "../../../../components/shared/SubHeading/SubHeading";
import { TechList } from "../../../Home/components/TechList/TechList";
import { technologies } from "../../../../constants";

export const ProjectCard = ({
    project,
}: {
    project: Project;
}) => {
    const { name, description, techStack, deployedLink, repoLink, image } = project;

    // Transform techStack similar to ProjectSection
    const transformTechStack = (
        techStack: Technology[] | string[]
    ): Tech[] => {
        return techStack.map((tech, index) => {
            if (typeof tech === "string") {
                const foundTech = technologies.find(
                    (technology) => technology.name === tech
                );
                if (foundTech) {
                    return {
                        key: foundTech.key,
                        name: foundTech.name,
                        image: foundTech.image,
                        link: foundTech.link,
                        isLearning: foundTech.isLearning,
                    };
                }
                return {
                    key: index,
                    name: tech,
                    image: "",
                    link: "",
                    isLearning: false,
                };
            }
            return {
                key: tech.key || index,
                name: tech.name,
                image: tech.image || "",
                link: tech.link || "",
                isLearning: tech.isLearning || false,
            };
        });
    };

    const techsForDisplay = techStack ? transformTechStack(techStack) : [];
    const link = deployedLink || repoLink;

    return (
        <div className="w-[48%] h-[54%] grid [grid-template-rows:minmax(0,40%)_minmax(0,20%)_minmax(0,40%)] gap-2 text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-white p-4 grayscale hover:grayscale-0">
            <div className="w-full flex flex-row justify-between items-start overflow-hidden">
                <div className="flex flex-row items-center gap-6">
                    <LazyLoadImage
                        className="h-auto w-12 rounded"
                        src={image}
                        alt={name}
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SubHeading text={name} />
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            <div className="w-full overflow-hidden">
                <p className="leading-relaxed m-0 text-sm">{description}</p>
            </div>

            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="w-full overflow-hidden">
                    <div className="h-full flex items-start">
                        <TechList techs={techsForDisplay} />
                    </div>
                </div>
            )}
        </div>
    );
};
