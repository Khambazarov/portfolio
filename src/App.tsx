import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
  // useLocation,
} from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

// const Navigation = () => {
  // const location = useLocation();

  // const getNavLink = (path: string) => {
  //   return location.pathname === path
  //     ? "rounded-md border-2 border-white p-1 font-mono sm:p-2 uppercase transition-colors duration-300 hover:border-white hover:bg-gray-800 md:text-lg"
  //     : "rounded-md border-2 border-gray-700 p-1 font-mono sm:p-2 uppercase transition-colors duration-300 hover:border-white hover:bg-gray-800 md:text-lg";
  // };

  // return (
    // <nav className="sticky top-0 w-full bg-gray-900 py-5 text-white">
    //   <ul className="flex flex-wrap justify-center gap-x-2 gap-y-4 md:gap-x-6">
    //     <li>
    //       <NavLink to="/" className={getNavLink("/")}>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/about" className={getNavLink("/about")}>
    //         About
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/projects" className={getNavLink("/projects")}>
    //         Projects
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/contact" className={getNavLink("/contact")}>
    //         Contact
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  // );
// };

export const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};
