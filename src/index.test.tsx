import { createMemoryRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { OpenSource } from "./routes/OpenSource/OpenSource";

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
                        path: "*open-source",
                        element: <OpenSource />,
                    },
                ],
            },
        ]);
        expect(router).toBeDefined();
    });
});
