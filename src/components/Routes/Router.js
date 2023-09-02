import { createBrowserRouter } from "react-router-dom";
import Main from "../Main Home/Layout/Main";
import Home from "../Main Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
