const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Randomizer",
      shortDescription: "Developed with vite + react.js",
      description:
        "A helpful tool for teachers and students that selects random student from a list. Ideal for classroom activities, quiz games and more.",
      link: "https://random-generator-for-students.netlify.app/",
      githubLink: "https://github.com/Khambazarov/random-generator",
    },
    {
      id: 2,
      name: "Weather Forecast App",
      shortDescription: "Developed with vite + react + typeScript",
      description:
        "A weather forecast app that provides current weather information and forecasts for various cities worldwide.",
      link: "https://weather-forecast-typescript.netlify.app/",
      githubLink: "https://github.com/Khambazarov/weather-ts",
    },
    {
      id: 3,
      name: "Guessing App",
      shortDescription: "Developed with vite + react.js",
      description:
        "An exciting number guessing game where users have to guess a hidden number within five attempts. This fun game promotes logical thinking and quick decision-making.",
      link: "https://khambazarov-guessing.netlify.app/",
      githubLink: "https://github.com/Khambazarov/guess-my-number",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-5">
      <h1 className="mx- mb-5 text-4xl font-bold text-white flex justify-center">My Projects</h1>
      {projectList.map((project) => (
        <div
          key={project.id}
          className="mb-4 rounded bg-gray-800 p-4 shadow-lg"
        >
          <h2 className="mb-2 text-2xl font-bold text-white">{project.name}</h2>
          <h3 className="mb-2 font-bold text-gray-300">
            {project.shortDescription}
          </h3>
          <p className="mb-2 text-gray-300">{project.description}</p>
          <div className="flex flex-col sm:flex-row">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400 sm:mb-0 sm:mr-2"
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
      ))}
    </div>
  );
};

export default Projects;
