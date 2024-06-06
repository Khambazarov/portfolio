import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="sticky top-0 w-full bg-gray-900 py-5 text-white">
          <ul className="mx-auto flex max-w-2xl justify-between px-4">
            <li>
              <Link
                to="/"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-lg font-bold uppercase transition-colors duration-300 hover:bg-gray-800 hover:text-teal-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-lg font-bold uppercase transition-colors duration-300 hover:bg-gray-800 hover:text-teal-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="rounded-md border-2 border-gray-700 p-2 font-mono text-lg font-bold uppercase transition-colors duration-300 hover:bg-gray-800 hover:text-teal-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
