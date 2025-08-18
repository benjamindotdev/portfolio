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
}) => (
    <div className="min-h-screen w-full flex flex-col justify-start p-0 m-0">
        <Header links={links} />
        <section className="min-h-[80vh] w-full flex flex-col justify-start self-start">
            <Outlet />
        </section>
        <Footer socials={socials} contacts={contacts} />
    </div>
);
