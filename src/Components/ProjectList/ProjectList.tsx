import { projects } from "../../data";
import Project from "../Project/Project";
import "./project-list.scss";
interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  return (
    <div className="pl">
      <h1 className="pl-title">Create & inspire. it's Lama</h1>
      <p className="pl-subtitle">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        modi et accusamus illo sunt, facilis quaerat iste, velit ea, iusto ipsa
        culpa assumenda? Quod vero unde obcaecati saepe hic fugiat!
      </p>
      <div className="pl-list">
        {projects.map((project) => (
          <Project key={project.id} img={project.img} link={project.link} />
        ))}
      </div>
      {projects.length > 6 && (
        <a href="">
          <h2>Load More...</h2>
        </a>
      )}
    </div>
  );
};

export default ProjectList;
