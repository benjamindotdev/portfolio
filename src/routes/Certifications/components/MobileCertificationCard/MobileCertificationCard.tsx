import { LazyLoadImage } from "react-lazy-load-image-component";
import { Certification } from "@/global";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { useTheme } from "../../../../contexts/ThemeContext";
import { Separator } from "@/components/shared/Separator/Separator";
import { MetadataText } from "@/components/shared/MetadataText/MetadataText";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { GitButton } from "@/components/shared/GitButton/GitButton";
import { ExternalLink } from "lucide-react";

export const MobileCertificationCard = ({
    certification,
}: {
    certification: Certification;
}) => {
    const { theme } = useTheme();
    const { name, company, location, date, description, logo, level, link, repoLink, deployedLink } = certification;

    const logoSrc = typeof logo === "string"
        ? logo
        : theme === "dark"
            ? logo.darkImage
            : logo.lightImage;

    return (
        <div className="w-[92%] flex flex-col gap-4 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg p-6 shrink-0">
            {/* Header */}
            <div className="flex flex-col gap-3 w-full">
                {/* Row 1: Title */}
                <div className="w-full flex justify-between items-start gap-2">
                    <SubHeading text={name} className="text-xl"/>
                    {/* Credential Link */}
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="text-portfolio-green hover:text-portfolio-green/80 transition-colors pt-1">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>

                {/* Row 2: Logo | @ Company */}
                <div className="flex flex-row items-center gap-3 w-full flex-wrap">
                    <LazyLoadImage
                        className="h-8 w-8 rounded object-contain"
                        src={logoSrc}
                        alt={company}
                        loading="lazy"
                    />
                    <span className="text-base font-semibold text-slate-700 dark:text-white">@ {company}</span>
                </div>

                {/* Row 3: Date */}
                <div className="w-full">
                    <MetadataText>{date}</MetadataText>
                </div>

                {/* Row 4: Level | Location */}
                <div className="flex flex-row items-center gap-3 flex-nowrap">
                    <MetadataText>{level}</MetadataText>
                    <Separator />
                    <MetadataText>{location}</MetadataText>
                </div>
            </div>

            {/* Description */}
            <div className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {description}
            </div>
            
            {/* Repo/Deployed Links */}
             {(repoLink || deployedLink) && (
                <div className="flex gap-4 mt-2">
                    {repoLink && (
                         <GitButton repoLink={repoLink} disabled={false} />
                    )}
                    {deployedLink && (
                        <LinkButton link={deployedLink} disabled={false} />
                    )}
                </div>
            )}
        </div>
    );
};
