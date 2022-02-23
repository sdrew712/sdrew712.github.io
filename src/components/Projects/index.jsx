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
          description="Meet my Particle Photon powered IoT robot car."
          tags={["React", "Arduino", "Particle Photon"]}
          projectLink="https://medium.com/@sarah.drew.dev/creating-an-iot-robot-car-with-the-particle-photon-webhooks-and-react-2f0ab775aed1"
          githubLink="https://github.com/sdrew712/dust-eater"
        />
        <ProjectCard
          image="images/board-hoard.png"
          alt="Front page of Board Hoard website"
          title="Board Hoard"
          description="A longboard e-commerce shop."
          tags={["React", "Node.js", "Express", "Prisma", "Stripe"]}
          projectLink="https://www.youtube.com/watch?v=X-kMmp8WHKE"
          githubLink="https://github.com/sdrew712/board-hoard"
        />
        <ProjectCard
          image="images/rate-noods.png"
          alt="Front page of Rate Noods website"
          title="Rate Noods"
          description="The start of my coding journey, a many-times-reworked instant noodle rating website!"
          tags={["React", "Amazon S3"]}
          projectLink="http://ratenoods.xyz/"
          githubLink="https://github.com/sdrew712/ratenoods.xyz"
        />
      </div>
    </section>
  );
};

export default Projects;
