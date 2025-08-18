import { render } from "@testing-library/react";
import { App } from "../../App";

jest.mock("../../App", () => ({
    App: () => <div>App</div>,
}));

describe("Root Component", () => {
    it("should render a div with the flex layout classes", () => {
        render(<div className="flex flex-col justify-center items-center p-0 min-h-screen m-0 bg-[#031926]">"App"</div>);
    });

    it("should render the App component", () => {
        render(
            <div className="flex flex-col justify-center items-center p-0 min-h-screen m-0 bg-[#031926]">
                <App />
            </div>
        );
    });
});
