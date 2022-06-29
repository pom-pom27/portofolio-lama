import "./project.scss";
interface ProjectProps {
  img: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ img, link }) => {
  return (
    <div className="project">
      <div className="project-toolbar">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a className="project-preview" href={link} target={"_blank"}>
        <img className="project-img" src={img} alt="project image" />
      </a>
    </div>
  );
};

export default Project;
