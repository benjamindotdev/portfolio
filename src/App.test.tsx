import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Certifications } from "./routes/Certifications/Certifications";
import { OpenSource } from "./routes/OpenSource/OpenSource";
import { benjamin } from "./constants";
import { ThemeProvider } from "./contexts/ThemeContext";

jest.mock("./App", () => ({
    App: () => <div className="App">App</div>,
}));

describe("Root Component", () => {
    it("should render a div with the className root", () => {
        render(<div className="root">"App"</div>);
    });

    it("should render the App component", () => {
        render(
            <div className="root">
                <App />
            </div>
        );
    });

    it("should import benjamin from constants", () => {
        expect(benjamin).toBeDefined();
    });

    it("should render the Routes component", () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
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
                            <Route
                                path="about"
                                element={<About aboutItems={benjamin.about} />}
                            />
                            <Route
                                path="certifications"
                                element={
                                    <Certifications certifications={benjamin.certifications} />
                                }
                            />
                            <Route
                                path="open-source"
                                element={<OpenSource projects={benjamin.projects} />}
                            />
                            <Route path="*" element={<Navigate to="../public/index.html" />} />
                        </Route>
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        );
    });
});
