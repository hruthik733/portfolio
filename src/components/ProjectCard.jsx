function ProjectCard({ project }) {
  return (
    <div className="project-flip-card">

      <div className="project-flip-inner">

        <div className="project-flip-front">

          <div className="project-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>

          <div className="project-front-content">

            <div className="project-category">
              {project.category}
            </div>

            <h3>{project.title}</h3>

            <p className="project-date">
              {project.date}
            </p>

            <div className="front-indicator">
              Hover to explore →
            </div>

          </div>

        </div>

        <div className="project-flip-back">

          <p className="project-description">
            {project.description}
          </p>

          <ul className="project-details">

            {project.details.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

          <div className="project-links">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github"></i>
              Source
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fas fa-external-link-alt"></i>
                Demo
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;