import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
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
      

    ]
  }])
  return (
   <RouterProvider router={router}></RouterProvider>
  );


  // return (
  //   <div className="min-h-screen bg-background text-primary">
  //     <Home />
  //   </div>
  // );
}








