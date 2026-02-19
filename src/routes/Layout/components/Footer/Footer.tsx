import { LogoImage } from "@/components/shared/LogoImage/LogoImage";
import { LanguageFlag } from "@/components/shared/LanguageFlag/LanguageFlag";
import type { Social, Contact } from "@/global";

export const Footer = ({
    socials,
    contacts,
    isVisible = true,
}: {
    socials: Social[];
    contacts: Contact[];
    isVisible?: boolean;
}) => {
    const year = new Date().getFullYear();

    if (!isVisible) return null;

    return (
        <footer className="min-h-[5dvh] w-full flex flex-row flex-nowrap items-end justify-end px-0 py-4 md:p-8" aria-label="Site footer">
            <nav className="flex flex-row justify-evenly w-full md:w-auto md:gap-8 items-end" aria-label="Social media links">

                <LanguageFlag countryCode="gb" proficiency="F" />
                <LanguageFlag countryCode="de" proficiency="B1" />

                {socials.map((social) => (
                    <LogoImage
                        key={social.key}
                        image={social.image}
                        name={social.name}
                        link={social.link as string}
                    />
                ))}
                {contacts.map((contact) => (
                    <LogoImage
                        key={contact.key}
                        image={contact.icon}
                        name={contact.name}
                        link={contact.link as string}
                        logoClassName=""
                    />
                ))}
                <h3 className="font-bold text-slate-700 dark:text-white text-lg md:text-portfolio-text">
                    © <span className="hidden md:inline">benjamin.dev </span>{year}
                </h3>
            </nav>
        </footer>
    );
};
