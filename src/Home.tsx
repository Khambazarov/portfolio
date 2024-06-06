import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 p-5 text-center">
      <h1 className="mb-5 animate-pulse text-4xl font-bold text-white">
        Welcome to my Application
      </h1>
      <p className="mb-5 text-lg text-gray-300">
        This application offers various features to manage your tasks. You can
        create projects, manage contacts, and much more.
      </p>
      <div className="flex flex-wrap justify-center">
        <Link
          to="/projects"
          className="m-2 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
        >
          Explore my Projects
        </Link>
        <Link
          to="/contact"
          className="m-2 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
