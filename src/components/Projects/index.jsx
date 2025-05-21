import Header from "../Header";
import ProjectCard from "./ProjectCard";
import "./index.css";

const Projects = () => {
  return (
    <section id="projects">
      <Header title="Projects" />
      <div id="projects-section">
        <ProjectCard
          image="images/3dkandi.png"
          alt="Pattern maker image"
          title="3Dkandi.com"
          description="My current project– A modeler for planning 3D pixel art patterns."
          tags={["three.js", "Firebase", "NextJS", "GraphQL", "SST"]}
          projectLink="https://3dkandi.com/"
          githubLink="https://github.com/sdrew712/3D-kandi-monorepo"
        />
        <ProjectCard
          image="images/soundcloud.png"
          alt="Soundcloud image"
          title="SAPPHIRA"
          description="Track my progress creating electronic music on Soundcloud!"
          tags={["Ableton Live", "Ableton Push 2", "Splice"]}
          projectLink="https://soundcloud.com/sapphira-879613871"
        />
        <ProjectCard
          image="images/dust-eater.png"
          alt="Completed robot car"
          title="Dust Eater"
          description="Meet my microcontroller powered IoT robot car."
          tags={["React", "Arduino", "Particle Photon"]}
          projectLink="https://medium.com/@sarah.drew.dev/creating-an-iot-robot-car-with-the-particle-photon-webhooks-and-react-2f0ab775aed1"
          githubLink="https://github.com/sdrew712/dust-eater"
        />
      </div>
    </section>
  );
};

export default Projects;
