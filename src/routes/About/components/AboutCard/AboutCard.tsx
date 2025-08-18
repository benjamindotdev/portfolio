import { PageText } from "../PageText/PageText";
import { CircleImage } from "../../../Home/components/CircleImage/CircleImage";

export const AboutCard = ({ image, text }: { image: string; text: string }) => {
    return (
        <div className="w-full flex flex-row items-center gap-16 px-8 md:px-16 lg:px-32">
            <div className="flex-shrink-0">
                <CircleImage image={image} text={text} />
            </div>
            <div className="flex-1 min-w-0">
                <PageText>{text}</PageText>
            </div>
        </div>
    );
};
