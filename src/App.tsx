import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Certifications } from "./routes/Certifications/Certifications";
import { Experience } from "./routes/Experience/Experience";
import { Projects } from "./routes/Projects/Projects";
import { Freelance } from "./routes/Freelance/Freelance";
import { Stack } from "./routes/Stack/Stack";
// import { Events } from "./routes/Events/Events";
import "./index.css";
import { benjamin } from "./constants";

export const App = () => (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-center w-full p-0 bg-white dark:bg-portfolio-navy font-lunasima">
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
                <Route
                    path="freelance"
                    element={<Freelance projects={benjamin.projects} />}
                />
                <Route
                    path="stack"
                    element={<Stack technologies={benjamin.technologies} />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </main>
);
