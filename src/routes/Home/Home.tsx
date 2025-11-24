import type { Technology } from "@/global";
import { HeroImage } from "@/components/shared/HeroImage/HeroImage";
import { CTAButton } from "@/components/shared/CTAButton/CTAButton";
import { PixelBClipDefs } from "@/components/shared/PixelBClipDefs/PixelBClipDefs";
import { TechLogoImage } from "@/components/shared/TechLogoImage/TechLogoImage";
import { Rocket, BookOpen, Lightbulb } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";

export const Home = ({
    technologies = [],
    name,
    image,
}: {
    technologies?: Technology[];
    name?: string;
    image?: string;
}) => {
    const homepageTechs = technologies.filter(tech => tech.homepage);

    return (
        <>
            <PixelBClipDefs />
            <PageContainer id="home" layout="hero">
                <div className="flex flex-col gap-12 w-full md:w-2/3 text-left">
                    <h1 className="p-0 m-0 text-4xl md:text-5xl lg:text-6xl text-portfolio-cyan font-satoshi font-bold tracking-wide whitespace-nowrap">
                        <span className="text-slate-700 dark:text-portfolio-white">Hey, I'm</span>
                        <strong className="text-portfolio-green">
                            {` ${name}`}
                        </strong>
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
                                src="logos/experience/shep.png"
                                alt="Shep logo"
                                className="inline-block w-8 h-8 ml-1 object-contain"
                            />
                        </p>
                        <p>I'm an Ironhack alum and former assistant teacher</p>
                        <p>I'm focused on modern JavaScript, full-stack development, and clean UX:</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                        {homepageTechs.map((tech, index) => (
                            <>
                                <TechLogoImage
                                    key={tech.key}
                                    image={tech.image}
                                    name={tech.name}
                                    link={tech.link}
                                />
                            </>
                        ))}
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
                            onClick={() => window.location.href = '/freelance'}
                            text="My solutions"
                            icon={Lightbulb}
                        />
                    </div>
                </div>
                <div className="w-full h-full md:w-1/3 aspect-square">
                    <HeroImage image="/images/heroCropped4.webp" text={name || "Benjamin"} />
                </div>
            </PageContainer>
        </>
    );
};
