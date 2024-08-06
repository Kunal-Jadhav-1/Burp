import React, { lazy, Suspense, useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
// import ContactUs from "./components/ContactUs";
// import Cart from "./components/Cart";
import Error from "./components/Error";
import UserContext from '../src/utils/userContext'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Store/reduxStore";

//importing  about using lazy loading coz 
//we gotta optimize the app and call only the components that are necessary
// this is called lazy loading or on demand loading in which a code for a component
// is loaded to the app only when it is necessary .

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
// const Header = lazy(() => import("./components/Header"));
const Body = lazy(() => import("./components/Body"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    const [cart, setCart] = useState([]);



    useEffect(() => {
        //one authethication api call later
        const info = {
            name: "Kunal",
        };
        setUserName(info.name);
    }, [])


    return (
        <Provider store={store}>
            {/* //This "Provider" makes sure all the component enclosed within it receive the updated value and the rest of the components print the default value */}
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="bg-secondary font-sans italic h-[100vh]">
                    <Header />
                    <Outlet />
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
                element:<Suspense fallback={<h1>Loading....... </h1>}> <ContactUs /> </Suspense>,
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
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);