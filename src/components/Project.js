import '../stylesheets/Project.scss';

const Project = (props) => {
  const projectTech = props.project.technologies.map((technology, index) => {
    return (
      <li key={index}>
        <h4 className="tech">{technology}</h4>
      </li>
    );
  });

  return (
    <article>
      <a href={props.project.url} target="_blank" className="project" rel="noopener noreferrer">
        <div className="project__shape">
          <div className="project__shape--image">
            <img className="photo" src={props.project.image} alt={props.project.name} />
          </div>
        </div>
        <h2 className="project__title">{props.project.name}</h2>
        <h3 className="project__subtitle">technologies: </h3>
        <ul className="project__shape--tech"> {projectTech}</ul>
      </a>
    </article>
  );
};

export default Project;
