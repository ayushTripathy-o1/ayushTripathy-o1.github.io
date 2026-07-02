import { createBrowserRouter, RouterProvider } from "react-router"
import Root from "./layouts/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
        { index: true, Component: Home },
    ],
},
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
