import { useState } from "react";

const Projects = () => {
  const projectList = [
    {
      id: 0,
      name: "My Portfolio App",
      shortDescription: "Developed using vite + react + typeScript + tailwind",
      description:
        "This web application serves as a personal portfolio and contact form. It is designed to showcase projects and provide an easy way for visitors to get in touch. The home page greets visitors and provides a brief introduction. The projects page displays a list of projects with descriptions. Each project has two links for further information: one leading to the live website and the other to the GitHub repository where the source code is hosted. The contact form allows visitors to leave a message. The application is built with modern technologies and practices to ensure a fast and responsive user experience. It uses React for the user interface, TypeScript for type safety, and Vite for efficient development and fast build process. For styling, it uses Tailwind CSS, a utility-first CSS framework that allows for high customization.",
      link: "https://khambazarov.netlify.app/",
      githubLink:
        "https://github.com/Khambazarov/dci-ui-project-using-vite-tailwind",
    },
    {
      id: 1,
      name: "Randomizer App",
      shortDescription: "Developed using vite + react.js",
      description:
        "A helpful tool for teachers and students that selects random student from a list. Ideal for classroom activities, quiz games and more.",
      link: "https://random-generator-for-students.netlify.app/",
      githubLink: "https://github.com/Khambazarov/random-generator",
    },
    {
      id: 2,
      name: "Weather Forecast App",
      shortDescription: "Developed using vite + react + typeScript",
      description:
        "A weather forecast app that provides current weather information and forecasts for various cities worldwide.",
      link: "https://weather-forecast-typescript.netlify.app/",
      githubLink: "https://github.com/Khambazarov/weather-ts",
    },
    {
      id: 3,
      name: "Guessing App",
      shortDescription: "Developed using vite + react.js",
      description:
        "An exciting number guessing game where users have to guess a hidden number within five attempts. This fun game promotes logical thinking and quick decision-making.",
      link: "https://khambazarov-guessing.netlify.app/",
      githubLink: "https://github.com/Khambazarov/guess-my-number",
    },
    {
      id: 4,
      name: "Memory App",
      shortDescription: "Currently being developed using Vite + React.js",
      description:
        "An exciting number guessing game where users have to guess a hidden number within five attempts. This fun game promotes logical thinking and quick decision-making.",
      link: "https://memory-for-kids.netlify.app/",
      githubLink: "https://github.com/Khambazarov/memory",
    },
  ];

  const [expandedStates, setExpandedStates] = useState(
    new Array(projectList.length).fill(false),
  );

  const toggleExpanded = (index: number): void => {
    const newExpandedStates: boolean[] = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-5">
      <h1 className="mb-5 flex justify-center text-4xl font-bold text-white">
        My Projects
      </h1>
      {projectList.map((project, index) => {
        const isExpanded = expandedStates[index];
        return (
          <div
            key={project.id}
            className="mb-4 rounded bg-gray-800 p-4 shadow-lg"
          >
            <h2 className="mb-2 text-2xl font-bold text-white">
              {project.name}
            </h2>
            <h3 className="mb-2 font-bold text-gray-300">
              {project.shortDescription}
            </h3>
            <p className="mb-2 text-gray-300">
              {isExpanded
                ? project.description
                : `${project.description.substring(0, 40)}...`}
            </p>
            <button
              className="mb-2 text-gray-400"
              onClick={() => toggleExpanded(index)}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
            <div className="flex flex-col md:flex-row">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400 md:mb-0 md:mr-2"
              >
                View Website
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
              >
                View Project on GitHub
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
