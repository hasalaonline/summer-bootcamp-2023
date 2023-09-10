import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Technologies from "./pages/technologies/Technologies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "technologies",
        element: <Technologies />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
