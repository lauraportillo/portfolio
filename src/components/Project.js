import React from 'react';
import '../stylesheets/Project.scss';

const Project = (props) => {
  const projectTech = props.project.technologies.map((technology, index) => {
    let techColor = '';
    if (technology.includes('react')) {
      techColor = 'react';
    } else if (technology.includes('html5')) {
      techColor = 'html5';
    } else if (technology.includes('css3')) {
      techColor = 'css3';
    } else if (technology.includes('sass')) {
      techColor = 'sass';
    } else if (technology.includes('javascript')) {
      techColor = 'javascript';
    } else if (technology.includes('git')) {
      techColor = 'git';
    } else {
      techColor = 'gitHub';
    }

    return (
      <li className={`icon ${techColor}`} key={index}>
        <img className="icon__image" src={technology} alt="icons" />
      </li>
    );
  });

  return (
    <article>
      <a href={props.project.url} target="_blank" className="project">
        <div className="project__shape">
          <div className="project__shape--image">
            <img className="photo" src={props.project.image} alt={props.project.name} />
          </div>
        </div>
        <h2 className="project__title">{props.project.name}</h2>
        {/* <ul className="project__shape--tech"> {projectTech}</ul> */}
      </a>
    </article>
  );
};

export default Project;
