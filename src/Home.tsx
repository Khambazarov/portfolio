import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 p-5 text-center">
      <h1 className="mb-5 animate-pulse text-4xl font-bold text-white">
        Welcome to my Application
      </h1>
      <div className="flex flex-col justify-center gap-4 gap-x-8 sm:flex-row">
        <Link
          to="/projects"
          className="w-44 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
        >
          Explore my Projects
        </Link>
        <Link
          to="/about"
          className="w-44 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className="w-44 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
        >
          Contact Me
        </Link>
      </div>
      <div className="mt-6 flex justify-center gap-x-8">
        <a
          href="https://www.linkedin.com/feed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 transition-colors duration-300 hover:text-teal-400"
        >
          <FaLinkedin size={48} />
        </a>
        <a
          href="https://github.com/Khambazarov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 transition-colors duration-300 hover:text-teal-400"
        >
          <FaGithubSquare size={48} />
        </a>
      </div>
    </div>
  );
};
