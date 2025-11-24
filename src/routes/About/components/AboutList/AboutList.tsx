import type { AboutItem } from "../../../../global";
import { AboutCard } from "../AboutCard/AboutCard";

export const AboutList = ({ aboutItems }: { aboutItems: AboutItem[] }) => {
    return (
        <ul className="h-full list-none px-[5vw] py-0 flex flex-col justify-evenly gap-[10vh]">
            {aboutItems &&
                aboutItems.map((item) => (
                    <AboutCard key={item.key} image={item.image} text={item.text} showCTAs={item.showCTAs} />
                ))}
        </ul>
    );
};
