import { SubHeading } from "../../../../components/shared/SubHeading/SubHeading";
import { TechLogoImage } from "../../../../components/shared/TechLogoImage/TechLogoImage";
import type { Tech } from "../../../../global";

export const TechList = ({
    techs,
    subHeading,
}: {
    techs: Tech[];
    subHeading?: string;
}) => {
    return (
        <article className="flex flex-col gap-8 text-left px-4 py-2 rounded-2xl">
            <SubHeading text={subHeading ? subHeading : ""} />
            <ul className="flex flex-wrap flex-row justify-start items-start text-portfolio-h3 gap-8">
                {techs &&
                    techs.map((tech) => (
                        <TechLogoImage
                            image={tech.image}
                            name={tech.name}
                            link={tech.link}
                            key={tech.key}
                            isLearning={tech.isLearning}
                        />
                    ))}
            </ul>
        </article>
    );
};
