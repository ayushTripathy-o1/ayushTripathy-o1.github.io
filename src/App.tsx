import { createBrowserRouter, RouterProvider } from "react-router"
import Root from "./layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Connect from "./pages/Connect";
import View from "./layouts/View";
import Now from "./pages/Now";

const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
        { index: true, Component: Home },
        {
            Component: View, children: [
                { path: "about", Component: About },
                { path: "projects", Component: Projects },
                { path: "skills", Component: Skills },
                { path: "connect", Component: Connect },
                { path: "now", Component: Now },
            ]
        },
    ],
},
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
