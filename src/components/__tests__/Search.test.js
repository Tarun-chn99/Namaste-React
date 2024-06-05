import {screen,render, fireEvent, waitFor} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import { MOCK_DATA } from "../mockData/RestaurantListMockData";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    console.log("Inside fetch of test environment");
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("Should load Body component with search button", async () => {

    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );
    console.log(global.fetch);

    const searchButton = screen.getByRole("button",{name: "Search"});
    const inputElement = screen.getByTestId("input");

    // await waitFor(()=>{

        fireEvent.change(inputElement,{ target: {value: "burger"}});
        fireEvent.click(searchButton);
        
        const resCards = screen.getAllByTestId("resCard");
        expect(resCards.length).toBe(1);
    // })

});