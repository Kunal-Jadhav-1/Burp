import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import UserContext from '../src/utils/userContext';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Store/reduxStore";
import "./axiosConfig";

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Body = lazy(() => import("./components/Body"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const info = {
            name: "Kunal",
        };
        setUserName(info.name);
    }, []);

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="flex flex-col min-h-screen bg-secondary font-sans italic">
                    <Header />
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<h1>Loading....... </h1>}> <Body /> </Suspense>,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....... </h1>}><About /></Suspense>,
                errorElement: <Error />,
            },
            {
                path: "/contact-us",
                element: <Suspense fallback={<h1>Loading....... </h1>}> <ContactUs /> </Suspense>,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Suspense fallback={<h1>Loading....... </h1>}> <Cart /> </Suspense>,
                errorElement: <Error />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
