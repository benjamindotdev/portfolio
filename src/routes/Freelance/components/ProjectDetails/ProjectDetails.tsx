import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project, Tech, Technology } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { benjamin } from "@/constants";

export const ProjectDetails = ({
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
                const foundTech = benjamin.technologies.find(
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
        <div className="w-full flex flex-col gap-6 text-slate-700 dark:text-white">
            <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex flex-row items-center gap-6">
                    <LazyLoadImage
                        className="h-auto w-16 md:w-20 rounded"
                        src={image}
                        alt={name}
                        loading="lazy"
                    />
                    <SubHeading text={name} />
                </div>
                {link && <LinkButton link={link} />}
            </div>

            <div className="w-full">
                <p className="leading-relaxed m-0 text-base md:text-lg">{description}</p>
            </div>

            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="w-full">
                    <h4 className="text-lg font-bold mb-4">Technologies Used</h4>
                    <div className="flex items-start">
                        <TechList techs={techsForDisplay} />
                    </div>
                </div>
            )}
        </div>
    );
};
