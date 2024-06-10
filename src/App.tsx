import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="sticky top-0 w-full bg-gray-900 py-5 text-white">
          <ul className="flex justify-center gap-x-2 md:gap-x-6">
            <li>
              <Link
                to="/"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-xs uppercase transition-colors duration-300 hover:border-white hover:bg-gray-800 md:text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-xs uppercase transition-colors duration-300 hover:border-white hover:bg-gray-800 md:text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-xs uppercase transition-colors duration-300 hover:border-white hover:bg-gray-800 md:text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-xs uppercase transition-colors duration-300 hover:border-white hover:bg-gray-800 md:text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
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

export default App;
