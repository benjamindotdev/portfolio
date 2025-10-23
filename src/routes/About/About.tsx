import type { AboutItem } from "../../global";
import { AboutCard } from "./components/AboutCard/AboutCard";
import { ScrollSection } from "../../components/shared/ScrollSection/ScrollSection";

export const About = ({ aboutItems }: { aboutItems?: AboutItem[] }) => {
    return (
        <ScrollSection>
            {aboutItems && aboutItems.map((item) => (
                <AboutCard key={item.key} image={item.image} text={item.text} />
            ))}
        </ScrollSection>
    );
};
