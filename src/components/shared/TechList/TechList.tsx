import { SubHeading } from "../SubHeading/SubHeading";
import { TechLogoImage } from "../TechLogoImage/TechLogoImage"; import type { Tech } from "@/global";
;
export const TechList = ({
    techs,
    subHeading,
    logoClassName,
    className,
    itemClassName,
}: {
    techs: Tech[];
    subHeading?: string;
    logoClassName?: string;
    className?: string;
    itemClassName?: string;
}) => {
    return (
        <div className="flex flex-col gap-4">
            {subHeading && <SubHeading text={subHeading} />}
            <ul className={className || "flex flex-wrap flex-row justify-center items-center text-portfolio-h3 gap-8"}>
                {techs &&
                    techs.map((tech) => (
                        <TechLogoImage
                            image={tech.image}
                            name={tech.name}
                            link={tech.link}
                            key={tech.key}
                            className={`${logoClassName || ""} ${tech.className || ""}`.trim()}
                            containerClassName={itemClassName}
                        />
                    ))}
            </ul>
        </div>
    );
};
