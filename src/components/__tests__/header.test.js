import {screen,render,fireEvent} from "@testing-library/react";
import Header from "../Header";
import {Provider} from 'react-redux';
import appStore from "../../AppReduxStore/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should check if login button is present", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{ name: "Login" });

    expect(loginButton).toBeInTheDocument();

});

it("Should change login button to logout button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{ name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "LogOut" });

    expect(logoutButton).toBeInTheDocument();

});

