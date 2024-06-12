import { useState, useEffect } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const About = () => {
  const skills = [
    "CSS",
    "SASS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "React.ts",
    "Node",
    "Next",
    "MongoDB",
    "Mongoose",
    "Git",
    "GitHub",
    "Linux",
    "Four Languages",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [skills.length]);

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
        <div className="rounded border p-2">
          <h2 className="p-2 text-center text-lg md:text-3xl">My Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`rounded border p-2 text-center ${index === activeIndex ? "bg-teal-500 text-gray-900" : "text-teal-300"}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-x-6">
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
