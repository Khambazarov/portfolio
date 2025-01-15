import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "./data.json";

interface ProjectProps {
  id: number;
  name: string;
  usedTechnologies: string;
  description: string;
  link: string;
  githubLink: string;
  inProgress: boolean;
}

interface ProjectCardProps {
  project: ProjectProps;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isExpanded,
  toggleExpanded,
}) => (
  <div
    key={project.id}
    className="relative mb-4 rounded bg-gray-800 p-4 shadow-lg"
  >
    <h2 className="mb-2 text-2xl font-bold text-white">
      {project.name}
      {project.inProgress && (
        <span className="absolute left-8 top-20 -rotate-12 transform animate-pulse text-4xl text-yellow-500">
          Still in Development
        </span>
      )}
    </h2>
    <h3 className="mb-2 font-bold text-gray-300">{project.usedTechnologies}</h3>
    <p className="mb-2 text-gray-300">
      {isExpanded
        ? project.description
        : `${project.description.substring(0, 50)}...`}
    </p>
    <button
      className="mb-2 text-gray-400"
      onClick={toggleExpanded}
      aria-label="Click and read more"
    >
      {isExpanded ? "Show Less" : "Read More"}
    </button>
    <div className="flex flex-col md:flex-row">
      {project.inProgress ? (
        <span className="mb-2 rounded bg-gray-500 px-4 py-2 text-center text-gray-400 md:mb-0 md:mr-2">
          View Website
        </span>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400 md:mb-0 md:mr-2"
          aria-label={`View website for ${project.name}`}
        >
          {`View ${project.name} Website`}
        </a>
      )}
      {project.inProgress ? (
        <span className="mb-2 rounded bg-gray-500 px-4 py-2 text-center text-gray-400 md:mb-0 md:mr-2">
          View Project on GitHub
        </span>
      ) : (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
          aria-label={`View GitHub repository for ${project.name}`}
        >
          View Project on GitHub
        </a>
      )}
    </div>
  </div>
);

export const Projects = () => {
  const projectList: ProjectProps[] = data;

  const [expandedStates, setExpandedStates] = useState(
    new Array(projectList.length).fill(false),
  );

  const toggleExpanded = (index: number): void => {
    const newExpandedStates: boolean[] = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 p-5">
        <ul className="mb-4 flex justify-between">
          <li>
            <NavLink
              className="rounded border border-white bg-teal-500 p-2 font-mono text-lg uppercase text-gray-900 transition-colors duration-1000 hover:bg-teal-400 sm:p-3"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="rounded border border-white bg-teal-500 p-2 font-mono text-lg uppercase text-gray-900 transition-colors duration-1000 hover:bg-teal-400 sm:p-3"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <h1 className="mb-5 flex justify-center text-4xl font-bold text-white">
          My Projects
        </h1>
        {projectList.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedStates[index]}
            toggleExpanded={() => toggleExpanded(index)}
          />
        ))}
      </div>
    </>
  );
};
