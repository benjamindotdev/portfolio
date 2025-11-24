import { LogoImage } from "../../../../components/shared/LogoImage/LogoImage";
import { LanguageFlag } from "../../../../components/shared/LanguageFlag/LanguageFlag";
import type { Social, Contact } from "../../../../global";

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
        <footer className="min-h-[5dvh] w-full flex items-end justify-end flex-grow-0 flex-shrink-0 py-8 gap-8" aria-label="Site footer">
            <nav className="flex flex-row gap-8 items-end" aria-label="Social media links">

                <LanguageFlag countryCode="gb" proficiency="C2" />
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
                    />
                ))}
                <h3 className="text-slate-700 dark:text-white text-portfolio-text">© benjamin.dev {year}</h3>
            </nav>
        </footer>
    );
};
