import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
//import Groceries from "./components/Groceries";
import ResMenu from "./components/ResMenu";
import UserContext from '../src/utils/userContext'
import {useState,useEffect} from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from './utils/appStore';

//importing  about using lazy loading coz 
//we gotta optimize the app and call only the components that are necessary
// this is called lazy loading or on demand loading in which a code for a component
// is loaded to the app only when it is necessary .

const About = lazy(() => import("./components/About"));


const AppLayout = () => {

    const [userName,setUserName]=useState();

    useEffect(() => {
        //one authethication api call later
        const info = {
            name: "Kunal",
        };
        setUserName(info.name);
    },[])


    return (
        <Provider store={appStore}>
        {/* //This "Provider" makes sure all the component enclosed within it receive the updated value and the rest of the components print the default value */}
        <UserContext.Provider value={{loggedInUser:userName,setUserName }}>
        <div className="bg-gray-200 font-sans italic">
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