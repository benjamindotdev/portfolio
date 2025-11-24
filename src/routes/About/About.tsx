import type { AboutItem } from "@/global";
import { AboutCard } from "./components/AboutCard/AboutCard";
import { PageContainer } from "@/routes/Layout/components";

export const About = ({ aboutItems }: { aboutItems?: AboutItem[] }) => {
    return (
        <PageContainer id="about" layout="scroll">
            {aboutItems && aboutItems.map((item) => (
                <AboutCard key={item.key} image={item.image} text={item.text} showCTAs={item.showCTAs} />
            ))}
        </PageContainer>
    );
};
