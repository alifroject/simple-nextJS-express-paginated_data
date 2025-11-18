import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/MainLayout"
import LoginPage from "../pages/auth/loginPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AdminLayout />
        ),
        children: [
            {
                index: true,
                element: <LoginPage />
            },


        ],

    }
])