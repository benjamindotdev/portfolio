import type { Technology } from "../../global";
import { CircleImage } from "./components/CircleImage/CircleImage";
import { TechTicker } from "./components/TechTicker/TechTicker";
import { CTAButton } from "../../components/shared/CTAButton/CTAButton";
import { PixelBClipDefs } from "../../components/shared/PixelBClipDefs/PixelBClipDefs";
import { Rocket, BookOpen, Lightbulb } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Home = ({
    technologies = [],
    image,
    name,
}: {
    technologies?: Technology[];
    image?: string;
    name?: string;
}) => {
    return (
        <>
            <PixelBClipDefs />
            <div className="w-full h-full flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                    <div className="flex flex-col gap-12 w-full md:w-2/3 text-left">
                        <h1 className="p-0 m-0 text-4xl md:text-5xl lg:text-6xl text-portfolio-cyan font-satoshi font-bold tracking-wide whitespace-nowrap">
                            <strong className="text-slate-700 dark:text-portfolio-white">Hey, I'm</strong>
                            <span className="text-portfolio-green text-[larger]">
                                {` ${name}`}
                            </span>
                        </h1>
                        <div className="flex flex-col gap-4 text-slate-700 dark:text-portfolio-white text-lg md:text-xl font-lunasima">
                            <p>
                                I'm the sole developer at{" "}
                                <a
                                    href="https://www.shephq.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 transition-colors duration-300 hover:text-portfolio-green"
                                >
                                    Shep
                                </a>
                                <LazyLoadImage
                                    src="logos/shep.png"
                                    alt="Shep logo"
                                    className="inline-block w-8 h-8 ml-1 object-contain"
                                />
                            </p>
                            <p>I'm an Ironhack alum and former assistant teacher</p>
                            <p>I build fast, user-focused web applications with modern full-stack tools</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <CTAButton
                                onClick={() => window.location.href = '/stack'}
                                text="My stack"
                                icon={Rocket}
                            />
                            <CTAButton
                                onClick={() => window.location.href = '/experience'}
                                text="My story"
                                icon={BookOpen}
                            />
                            <CTAButton
                                onClick={() => window.location.href = '/projects'}
                                text="My solutions"
                                icon={Lightbulb}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 aspect-square">
                        <CircleImage image="/images/heroCropped4.webp" text={name || "Benjamin"} />
                    </div>
                </div>
            </div>
        </>
    );
};
