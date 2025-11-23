import { NavLink } from "react-router-dom";
import { Link } from "../../../../global";
import { Logo } from "../../../../components/shared/Logo/Logo";
import ThemeToggle from "../../../../components/shared/ThemeToggle/ThemeToggle";

export const Header = ({ links }: { links: Link[] }) => {
    return (
        <nav className="w-full min-h-[5vh] pt-4 m-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 flex-shrink-0" aria-label="Main navigation">
            <NavLink to="/" className="hover:scale-110 transition-transform duration-300" aria-label="Home">
                <Logo className="h-12 w-8" />
            </NavLink>
            <ul className="flex flex-row items-center gap-8 p-0 list-none">
                {links.map((link) => (
                    <li key={link.title} className="group">
                        <NavLink
                            className="text-slate-700 dark:text-portfolio-white no-underline text-portfolio-h3 font-satoshi tracking-wide group-hover:!text-portfolio-green transition-all duration-500 hover:scale-110"
                            to={link.route}
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#2bf38b" : "",
                                    transform: isActive ? "scale(1.2)" : "",
                                };
                            }}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
};
