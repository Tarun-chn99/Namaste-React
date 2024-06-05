import {render,screen} from "@testing-library/react"
import About from "../About";
import "@testing-library/jest-dom";


it("Testing the about component",() => {

    render(<About/>);

    const heading = screen.getAllByRole("heading");
    expect(heading[0]).toBeInTheDocument();
});

it("Testing the button element", () => {

    render(<About/>);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

