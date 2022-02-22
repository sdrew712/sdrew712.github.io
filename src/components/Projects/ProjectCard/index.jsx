import "./index.css";

const ProjectCard = ({ image, alt, title, description, tags }) => {
  const divImage = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div id="project-card" style={divImage}>
      <div className="project-container">
        <div>
          <h3>{title}</h3>
          <img src="images/open.svg" alt={alt} />
        </div>

        <p className="project-description">{description}</p>
        <div className="tag-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="github-link-container">
          <img src="images/github-logo.svg" alt="" />
          <p>View on GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
