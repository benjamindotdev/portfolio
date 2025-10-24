import { Routes, Route } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Certifications } from "./routes/Certifications/Certifications";
import { Experience } from "./routes/Experience/Experience";
import { Projects } from "./routes/Projects/Projects";
import { NotFound } from "./routes/NotFound/NotFound";
// import { Events } from "./routes/Events/Events";
import "./index.css";
import { benjamin } from "./constants";

export const App = () => (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-center w-[90vw] mx-auto p-0 bg-portfolio-navy font-lunasima md:max-w-[90dvw] xl:max-w-[85dvw] 2xl:max-w-[80dvw]">
        <Routes>
            <Route
                path="*"
                element={
                    <Layout
                        links={benjamin.links}
                        socials={benjamin.socials}
                        contacts={benjamin.contacts}
                    />
                }
            >
                <Route
                    index
                    element={
                        <Home
                            name={benjamin.name}
                            image={benjamin.hero}
                            technologies={benjamin.technologies}
                        />
                    }
                />
                <Route path="about" element={<About aboutItems={benjamin.about} />} />
                <Route
                    path="certifications"
                    element={<Certifications certifications={benjamin.certifications} />}
                />
                <Route
                    path="experience"
                    element={<Experience experience={benjamin.experience} />}
                />
                <Route
                    path="projects"
                    element={<Projects projects={benjamin.projects} />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </main>
);
