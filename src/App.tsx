import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './pages/LayOut';
import Home from './pages/Home';
import About from './pages/About';
import AboutEdit from './pages/About/AboutEdit';
import AboutAdd from './pages/About/AboutAdd';
import Project from './pages/Project';
import Another from './pages/Another';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "about/add",
                element: <AboutAdd />
            },
            {
                path: "about/edit",
                element: <AboutEdit />
            },
            {
                path: "project",
                element: <Project />,
            },
        ],
    },
    {
        path: 'another',
        element: <Another />
    }
]);

function App() {

    return (
        <RouterProvider router={router} />
    );
}

export default App;