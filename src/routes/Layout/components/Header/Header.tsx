import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "@/global";
import { Logo } from "@/components/shared/Logo/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle/ThemeToggle";

export const Header = ({ links }: { links: Link[] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="w-full p-4 md:p-8 flex flex-row items-center justify-between flex-shrink-0 relative z-50" aria-label="Main navigation">
            <NavLink to="/" className="hover:scale-110 transition-transform duration-300" aria-label="Home">
                <Logo className="h-12 w-8" />
            </NavLink>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-slate-700 dark:text-portfolio-white p-2 hover:text-portfolio-green transition-colors"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Navigation Links */}
            <ul
                className={`
                    flex items-center gap-8 list-none
                    ${isMenuOpen
                        ? "flex-col absolute top-full left-0 w-full bg-white dark:bg-portfolio-navy p-8 shadow-lg border-t border-slate-200 dark:border-slate-800"
                        : "hidden"
                    }
                    md:flex md:flex-row md:static md:w-auto md:bg-transparent md:p-0 md:shadow-none md:border-none
                `}
            >
                {links.map((link) => (
                    <li key={link.title} className="group">
                        <NavLink
                            className="text-slate-700 dark:text-portfolio-white no-underline text-xl md:text-portfolio-h3 font-satoshi tracking-wide group-hover:!text-portfolio-green transition-all duration-500 hover:scale-110 block"
                            to={link.route}
                            onClick={() => setIsMenuOpen(false)}
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
