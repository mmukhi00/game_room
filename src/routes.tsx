import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import React from "react"
import Home from "./pages/Home"
import GameDetailsPage from "./pages/GameDetailsPage"

const router=createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            {path:'game/:id',element:<GameDetailsPage/>}
        ]
        
    }
])

export default router