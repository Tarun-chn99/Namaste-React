import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from 'react-redux';
import appStore from "./AppReduxStore/appStore";
import Cart from "./components/Cart"


const About = lazy(() => import("./components/About"));

const App = () => {

    return  (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet /> 
            </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <About />
                         </Suspense>
            },
            {
                path: '/restaurantMenu/:id',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]       
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
