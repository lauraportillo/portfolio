import Project from './Project';
import '../stylesheets/ProjectList.scss';

const ProjectList = (props) => {
  const renderProject = props.projects.map((project) => {
    return (
      <li key={project.id.toString()}>
        <Project project={project} />
      </li>
    );
  });

  return (
    <div className="">
      <ul className="projectList">{renderProject}</ul>
    </div>
  );
};

export default ProjectList;
