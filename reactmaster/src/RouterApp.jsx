import React, {Component} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./components/Movies";
import ErrorComponent from "./components/ErrorComponent";
import TestSection from "./components/TestSection";

class RouterApp extends Component{

    render(){
        const router = createBrowserRouter([
            {
                path: "/",
                element: <Movies/>,
                errorElement: <ErrorComponent/>
            },
            {
                path: "/test",
                element: <TestSection/>
            },
        ]);

        return( 
            <RouterProvider router={router} />
        );
    }
}

export default RouterApp;