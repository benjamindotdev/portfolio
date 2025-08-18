import { LazyLoadImage } from "react-lazy-load-image-component";
import { SubHeading } from "../SubHeading/SubHeading";

export const ProjectInfo = ({
    image,
    name,
}: {
    image: string;
    name: string;
}) => {
    return (
        <article className="w-full flex justify-start items-center gap-8">
            <LazyLoadImage
                className="h-[30px] w-auto rounded-lg transition-all duration-500"
                src={image}
                alt={name}
                loading="lazy"
            />
            <SubHeading text={name} />
        </article>
    );
};
