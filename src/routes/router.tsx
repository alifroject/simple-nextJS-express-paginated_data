import { createBrowserRouter } from "react-router-dom";

import {BeforeLayout} from "../layouts/BeforeLayout";
import LoginPage from "../pages/auth/loginPage";
import Dashboard from "../pages/dashboard/dashboard_";
import NotFoundPage from "../pages/notFound/Notfound"; // optional custom 404
import ProtectedRoute from "../components/private/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <BeforeLayout />,
    errorElement: <NotFoundPage />, // shows for invalid paths
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "/dashboard",  // accessible at /dashboard
        element:
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
      },
      {
        path: "/users",  // accessible at /users
        element:
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
      },
      {
        path: "/products",  // accessible at /products
        element:
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
      }
    ],
  }
]);
