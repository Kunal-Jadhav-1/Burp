import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header";
import Error from "./components/Error";
import UserContext from "./utils/userContext";
import { store } from "./Store/reduxStore";
import GoogleLogin from "./components/GoogleLogin";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the protected route

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Body = lazy(() => import("./components/Body"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user: null }}>
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

const GoogleAuthWrapper = () => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
            <GoogleLogin />
        </GoogleOAuthProvider>

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
                element: (
                    <ProtectedRoute>
                        <Suspense fallback={<h1>Loading....... </h1>}>
                            <Cart />
                        </Suspense>
                    </ProtectedRoute>
                ),
                errorElement: <Error />,
            },
            {
                path: "/login",
                element: <Suspense fallback={<h1>Loading....... </h1>}> <GoogleAuthWrapper /> </Suspense>,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
