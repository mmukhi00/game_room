import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import React from "react"
import Home from "./pages/Home"
import GameDetailsPage from "./pages/GameDetailsPage"
import ErrorPage from "./pages/ErrorPage"

const router=createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement:<ErrorPage/>,
        children: [
            { index: true, element: <Home /> },
            {path:'game/:id',element:<GameDetailsPage/>}
        ]
        
    }
])

export default router