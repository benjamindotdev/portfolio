import { NavLink } from "react-router-dom";
import { Link } from "../../../../global";
import { TechLogoImage } from "../../../../components/shared/TechLogoImage/TechLogoImage";

export const Header = ({ links }: { links: Link[] }) => {
    return (
        <nav className="w-full min-h-[5vh] pt-4 m-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 flex-shrink-0">
            <TechLogoImage image="images/B.png" name="benjamin.dev" link="/" />
            <ul className="flex flex-row items-center gap-12 p-0 list-none">
                {links.map((link) => (
                    <li key={link.title}>
                        <NavLink
                            className="text-portfolio-green no-underline text-portfolio-h3 font-lunasima hover:text-portfolio-cyan active:text-portfolio-cyan transition-all duration-500 hover:scale-110"
                            to={link.route}
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "" : "",
                                    color: isActive ? "#fff" : "",
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
