import 'dynamic-import-polyfill';

import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import Header from "./components/Header";
import Error from "./components/Error";
import UserContext from "./utils/userContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/reduxStore";
import "./axiosConfig";
import dotenv from "dotenv";
import PrivateRoute from "./components/PrivateRoutes"
import Signin from "./components/Signin"


// Load environment variables
dotenv.config();

const clerkPublicKey = process.env.CLERK_PUBLISHABLE_KEY;

// Check if the Clerk Publishable Key is available
if (!clerkPublicKey) {
    throw new Error("Missing Clerk Publishable Key");
}

// Lazy loading components
const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Body = lazy(() => import("./components/Body"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const info = { name: "Kunal" };
        setUserName(info.name);
    }, []);

    return (
        <ClerkProvider publishableKey={clerkPublicKey}> {/* Correct prop here */}
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
        </ClerkProvider>
    );
};

// Define routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Body />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/contact-us",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <ContactUs />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/signin",
                element: <Signin />, // Sign-In page route
            },
        ],
        errorElement: <Error />,
    },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
