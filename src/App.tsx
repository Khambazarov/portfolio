import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { trackPageview } from "./ga4";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export const App = () => (
  <Router>
    <AppContent />
  </Router>
);
