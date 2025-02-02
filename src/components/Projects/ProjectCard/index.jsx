import "./index.css";

const ProjectCard = ({
  image,
  alt,
  title,
  description,
  tags,
  projectLink,
  githubLink,
}) => {
  const divImage = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <a href={projectLink} className="project-link">
      <div className="project-card" style={divImage}>
        <div className="container">
          <div className="top">
            <div className="title">
              <h3>{title}</h3>
              <img src="images/open.svg" alt={alt} className="open-icon" />
            </div>
            <p className="project-description">{description}</p>
          </div>

          <div>
            <div className="tag-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {githubLink && (
              <div className="github-link-container">
                <img src="images/github-logo.svg" alt="" />
                <a href={githubLink}>
                  <p>View on GitHub</p>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
