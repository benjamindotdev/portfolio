import { PageText } from "../PageText/PageText";
import { AboutImage } from "../AboutImage/AboutImage";

export const AboutCard = ({ image, text }: { image: string; text: string }) => {
    return (
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-16 px-8">
            <div className="w-full md:w-2/3">
                <AboutImage src={image} alt={text} />
            </div>
            <div className="w-full md:w-1/3">
                <PageText>{text}</PageText>
            </div>
        </div>
    );
};
