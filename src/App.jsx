import "../index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet, createBrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import ErrorPage from "./components/ErrorPage";
import BlackHole from "./components/Cards/BlackHole";
import Bosons from "./components/Cards/Bosons";
import Elementaryparticles from "./components/Cards/Elementaryparticles";
import Gravity from "./components/Cards/Gravity";
import Religionandscience from "./components/Cards/Religionandscience";
import Roadtobigbang from "./components/Cards/Roadtobigbang";
import StellarEvolution from "./components/Cards/StellarEvolution";
import Thebigbang from "./components/Cards/Thebigbang";
import Theexpansion from "./components/Cards/Theexpansion";
import Thejourneybegins from "./components/Cards/Thejourneybegins";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <Aboutus /> },
      { path: "/contact", element: <Contactus /> },
      { path: "/blackhole", element: <BlackHole /> },
      { path: "/bosons", element: <Bosons /> },
      { path: "/elementaryparticles", element: <Elementaryparticles /> },
      { path: "/gravity", element: <Gravity /> },
      { path: "/religionandscience", element: <Religionandscience /> },
      { path: "/roadtobigbang", element: <Roadtobigbang /> },
      { path: "/stellarevolution", element: <StellarEvolution /> },
      { path: "/thebigbang", element: <Thebigbang /> },
      { path: "/theexpansion", element: <Theexpansion /> },
      { path: "/thejourneybegins", element: <Thejourneybegins /> },
    ],
  },
]);
