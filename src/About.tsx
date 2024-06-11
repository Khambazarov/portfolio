import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
        <h1 className="my-5 p-2 text-center text-3xl font-bold">
          Hello, I'm <span className="text-teal-500"> Renat</span> based in
          Hamburg
        </h1>
        <h2 className="p-2 text-center text-lg md:text-3xl">
          I'm a web & software developer
        </h2>
        <h2 className="p-2 text-center text-lg md:text-3xl">
          I study at DCI Web-Technologies
        </h2>
        <h2 className="p-2 pb-6 text-center text-lg md:text-3xl">
          such as MERN-stack
        </h2>
        <div className="mt-1 flex justify-center gap-x-6">
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
    </>
  );
};
