import { createMemoryRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Projects } from "./routes/Projects/Projects";

describe("Router tests", () => {
    it("should render Root component", () => {
        const router = createMemoryRouter([
            {
                path: "*",
                element: <Root />,
                children: [
                    {
                        path: "*",
                        element: <Home />,
                    },
                    {
                        path: "*about",
                        element: <About />,
                    },
                    {
                        path: "*projects",
                        element: <Projects />,
                    },
                ],
            },
        ]);
        expect(router).toBeDefined();
    });
});
