import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Certifications } from "./routes/Certifications/Certifications";
import { Experience } from "./routes/Experience/Experience";
import { Projects } from "./routes/Projects/Projects";
// import { Events } from "./routes/Events/Events";
import "./stylesheets/App.scss";
import { benjamin } from "./constants";

export const App = () => (
    <main className="App">
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
                {/* <Route path="events" element={<Events events={benjamin.events} />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    </main>
);
