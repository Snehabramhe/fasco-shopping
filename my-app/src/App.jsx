import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([{
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/shop",
        element: <Shop/>
      },
      {
        path:"/product",
        element: <Product/>
      },
    ]
  }])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}








