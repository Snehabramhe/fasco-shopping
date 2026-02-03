import AppLayout from "./components/AppLayout";
import AuthPage from "./pages/auth/AuthPage";
import CartPage from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    // ✅ Auth routes OUTSIDE layout (no navbar/footer)
    {
      path: "/auth/:type",
      element: <AuthPage />,
    },

    // ✅ Pretty shortcut routes (optional but useful)
    { path: "/sign-in", element: <Navigate to="/auth/signin" replace /> },
    { path: "/sign-up", element: <Navigate to="/auth/signup" replace /> },
    { path: "/forgot-password", element: <Navigate to="/auth/forgot" replace /> },
    { path: "/confirm-code", element: <Navigate to="/auth/confirm" replace /> },
    { path: "/reset-password", element: <Navigate to="/auth/reset" replace /> },

    // ✅ Main app routes WITH layout
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/product", element: <Product /> },
        { path: "/cart", element: <CartPage /> },
      ],
    },

    // ✅ fallback
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

  return <RouterProvider router={router} />;
}




