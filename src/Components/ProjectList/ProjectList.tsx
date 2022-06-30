import { useEffect, useState } from "react";
import { projects } from "../../util/data";
import Project from "../Project/Project";
import "./project-list.scss";
interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 480px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const projectSlice = projects.slice(0, matches ? 3 : 6);
  return (
    <div className="pl">
      <h1 className="pl-title">Projects</h1>
      <p className="pl-subtitle">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        modi et accusamus illo sunt, facilis quaerat iste, velit ea, iusto ipsa
        culpa assumenda? Quod vero unde obcaecati saepe hic fugiat!
      </p>
      <div className="pl-list">
        {projectSlice.map((project) => (
          <Project key={project.id} img={project.img} link={project.link} />
        ))}
      </div>
      {projects.length > 6 && (
        <div className="loadmore-wrapper">
          <a href="" className="project-load-more">
            <h2>Load More ➜</h2>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
