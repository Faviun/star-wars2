import React from "react";
import ReactDOM from "react-dom/client";
// import необходимых компонентов для redux-store
import { store } from "./store/store";
import { Provider } from "react-redux";
import StarWars from "./components/StarWars/StarWars";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SignIn from "./components/pages/SignIn";
import "./index.css";

const handleSignIn = () => {};

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn handleSignIn={handleSignIn} />,
    },
    {
        path: "/people",
        element: (
            <ProtectedRoute>
                <StarWars />
            </ProtectedRoute>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
