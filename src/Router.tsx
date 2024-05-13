import { createBrowserRouter, RouterProvider } from "react-router-dom";

// screens
import AdScreen from "@/Components/Screens/AdScreen";
import ReadyScreen from "@/Components/Screens/Ready";
import FrScreen from "@/Components/Screens/FaceRecognition";
import WaitingScreen from "./Components/Screens/WaitingPetScreen";
import ResultScreen from "./Components/Screens/Result";
import RecognitionCompleteScreen from "./Components/Screens/RecognitionComplete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdScreen />,
  },
  {
    path: "/ready",
    element: <ReadyScreen />,
  },
  {
    path: "/face-recognition",
    element: <FrScreen />,
  },

  {
    path: "/recognition-complete",
    element: <RecognitionCompleteScreen />,
  },
  {
    path: "/waiting",
    element: <WaitingScreen />,
  },
  {
    path: "/result",
    element: <ResultScreen />,
  },
]);

export default () => <RouterProvider router={router} />;
