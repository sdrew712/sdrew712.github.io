import Header from "../Header";
import ProjectCard from "./ProjectCard";
import "./index.css";

const Projects = () => {
  return (
    <section id="projects">
      <Header title="Projects" />
      <div id="projects-section">
        <ProjectCard
          image="images/dust-eater.png"
          alt="Completed robot car"
          title="Dust Eater"
          description="My Particle Photon powered IoT robot car"
          tags={["React", "Arduino", "Particle Photon"]}
        />
        <ProjectCard
          image="images/board-hoard.png"
          alt="Front page of Board Hoard website"
          title="Board Hoard"
          description="A longboard e-commerce shop."
          tags={["React", "Node.js", "Express", "Prisma", "Stripe"]}
        />
        <ProjectCard
          image="images/rate-noods.png"
          alt="Front page of Rate Noods website"
          title="Rate Noods"
          description="The start of my coding journey, a many-times-reworked instant noodle rating website!"
          tags={["React", "Amazon S3"]}
        />
      </div>
    </section>
  );
};

export default Projects;
