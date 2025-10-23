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
            {/* Fixed Header */}
            <div className="flex-shrink-0">
                <Header links={links} />
            </div>

            {/* Scrollable Content Area */}
            <section className="flex-1 w-full overflow-hidden">
                <Outlet />
            </section>

            {/* Fixed Footer */}
            <div className="flex-shrink-0">
                <Footer socials={socials} contacts={contacts} isVisible={true} />
            </div>
        </div>
    );
};
