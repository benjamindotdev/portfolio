import { NavLink } from "react-router-dom";
import { Link } from "../../../../global";
import { LogoImage } from "../../../../components/shared/LogoImage/LogoImage";

export const Header = ({ links }: { links: Link[] }) => {
    return (
        <nav className="w-full min-h-[5vh] pt-4 m-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 flex-shrink-0" aria-label="Main navigation">
            <LogoImage image="images/B.webp" name="benjamin.dev" link="/" />
            <ul className="flex flex-row items-center gap-12 p-0 list-none">
                {links.map((link) => (
                    <li key={link.title}>
                        <NavLink
                            className="text-portfolio-white no-underline text-portfolio-h3 font-lunasima hover:text-portfolio-cyan active:text-portfolio-cyan transition-all duration-500 hover:scale-110"
                            to={link.route}
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "" : "",
                                    color: isActive ? "#2bf38b" : "",
                                    transform: isActive ? "scale(1.2)" : "",
                                    transitionDuration: isActive ? "500ms ease-in-out" : "",
                                };
                            }}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
