import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

// screens
import AdScreen from "@/Components/Screens/AdScreen"
import ReadyScreen from "@/Components/Screens/Ready"

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <AdScreen />,
    },
    {
        path: "/ready",
        element: <ReadyScreen />,
      },
  ]);
  
export default () => <RouterProvider router={router} />