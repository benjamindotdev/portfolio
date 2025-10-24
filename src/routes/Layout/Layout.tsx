import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import type { Link, Social, Contact } from "../../global";

export const Layout = ({
    links,
    socials,
    contacts,
}: {
    links: Link[];
    socials: Social[];
    contacts: Contact[];
}) => {
    return (
        <div className="h-screen w-full flex flex-col overflow-hidden">
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-portfolio-green focus:text-portfolio-navy focus:rounded-md focus:font-semibold focus:outline-none focus:ring-2 focus:ring-portfolio-white"
            >
                Skip to main content
            </a>

            {/* Fixed Header */}
            <div className="flex-shrink-0">
                <Header links={links} />
            </div>

            {/* Scrollable Content Area */}
            <section
                className="flex-1 w-full overflow-hidden"
                aria-label="Main content"
            >
                <Outlet />
            </section>

            {/* Fixed Footer */}
            <div className="flex-shrink-0">
                <Footer socials={socials} contacts={contacts} isVisible={true} />
            </div>
        </div>
    );
};
