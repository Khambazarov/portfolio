import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const skills = [
  "CSS",
  "SASS",
  "Bootstrap",
  "JavaScript",
  "ReactJS",
  "Node",
  "Express",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "Linux",
];

const currentlyExpandingSkills = [
  "Tailwind",
  "TypeScript",
  "ReactTS",
  "NextJS",
];

export const Home = () => {
  const [activeIndexSkills, setActiveIndexSkills] = useState(0);
  const [
    activeIndexCurrentlyExpandingSkills,
    setActiveIndexCurrentlyExpandingSkills,
  ] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndexSkills(Math.floor(Math.random() * skills.length));
      setActiveIndexCurrentlyExpandingSkills(
        Math.floor(Math.random() * currentlyExpandingSkills.length),
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const generateClassName = (isActive: boolean): string =>
    `rounded border p-2 text-center transition-colors duration-1000 ${
      isActive ? "bg-teal-500 text-gray-900" : "text-teal-300"
    }`;

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
        <ul className="mb-6 flex flex-col items-center gap-5 px-5 sm:flex-row sm:gap-x-28">
          <li>
            <NavLink
              className="animate-pulse rounded border border-white bg-teal-500 p-2 font-mono text-lg uppercase text-gray-900 transition-colors duration-1000 hover:text-teal-400 sm:p-3"
              to="/projects"
            >
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="animate-pulse rounded border border-white bg-teal-500 p-2 font-mono text-lg uppercase text-gray-900 transition-colors duration-1000 hover:text-teal-400 sm:p-3"
              to="/contact"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
        <div>
          <h2 className="mb-2 p-2 text-center text-xl md:text-xl">My skills</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className={generateClassName(
                  skill === skills[activeIndexSkills],
                )}
              >
                {skill}
              </div>
            ))}
          </div>
          <h2 className="mb-2 mt-4 p-2 text-center text-xl md:text-xl">
            Currently expanding my skills
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {currentlyExpandingSkills.map((currentlyExpandingSkill) => (
              <div
                key={currentlyExpandingSkill}
                className={generateClassName(
                  currentlyExpandingSkill ===
                    currentlyExpandingSkills[
                      activeIndexCurrentlyExpandingSkills
                    ],
                )}
              >
                {currentlyExpandingSkill}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-x-8">
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
