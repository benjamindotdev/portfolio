import { TechLogoImage } from "../../../../components/shared/TechLogoImage/TechLogoImage";
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
        <footer className="min-h-[5dvh] w-full flex items-center justify-center flex-grow-0 flex-shrink-0 py-8 gap-8">
            <div className="flex gap-8">
                {socials.map((social) => (
                    <TechLogoImage
                        key={social.key}
                        image={social.image}
                        name={social.name}
                        link={social.link as string}
                    />
                ))}
            </div>
            <h3 className="text-portfolio-green text-portfolio-text">benjamin.dev {year}</h3>
            <div className="flex gap-8">{contacts.map((contact) => (
                <TechLogoImage
                    key={contact.key}
                    image={contact.icon}
                    name={contact.name}
                    link={contact.link as string}
                />
            ))}
            </div>
        </footer>
    );
};
