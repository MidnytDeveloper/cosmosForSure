import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import BlackHole from "./components/Cards/BlackHole"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Bosons from "./components/Cards/Bosons";
import Elementaryparticles from "./components/Cards/Elementaryparticles";
import Gravity from "./components/Cards/Gravity";
import Religionandscience from "./components/Cards/Religionandscience";
import Roadtobigbang from "./components/Cards/Roadtobigbang";
import StellarEvolution from "./components/Cards/StellarEvolution";
import Thebigbang from "./components/Cards/Thebigbang";
import Theexpansion from "./components/Cards/Theexpansion";
import Thejourneybegins from "./components/Cards/Thejourneybegins";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop/>
      <Outlet />
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/blackhole",
        element: <BlackHole />,
      },
      {
        path: "/bosons",
        element: <Bosons />,
      },
      {
        path: "/elementaryparticles",
        element: <Elementaryparticles />,
      },
      {
        path: "/gravity",
        element: <Gravity />,
      },
      {
        path: "/religionandscience",
        element: <Religionandscience />,
      },
      {
        path: "/roadtobigbang",
        element: <Roadtobigbang />,
      },
      {
        path: "/stellarevolution",
        element: <StellarEvolution />,
      },
      {
        path: "/thebigbang",
        element: <Thebigbang />,
      },
      {
        path: "/theexpansion",
        element: <Theexpansion />,
      },
      {
        path: "/thejourneybegins",
        element: <Thejourneybegins />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
