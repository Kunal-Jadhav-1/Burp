import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
//import Groceries from "./components/Groceries";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


//importing  groceries using lazy loading coz 
//we gotta optimize the app and call only the components that are necessary
// this is called lazy loading or on demand loading in which a code for a component
// is loaded to the app only when it is necessary .

const Groceries = lazy(() => import("./components/Groceries"));
const About = lazy(() => import("./components/About"));


const AppLayout = () => {
    return (
        <div className="font-serif bg-gray-200 italic">
            <Header />
            <Outlet />
        </div>
    );

};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....... </h1>}><About /></Suspense>,
                errorElement: <Error />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
                errorElement: <Error />,
            },
            {
                path: "/groceries",
                element: <Suspense fallback={<h1> Loading...... </h1>}><Groceries /></Suspense>,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error />,
            },
            {
                path : "/restaurants/:resid",
                element: <ResMenu/>,
                errorElement: <Error />,
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);