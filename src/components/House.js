import React from 'react';
import '../stylesheets/House.scss';

const House = (props) => {
  const houseTech = props.house.technologies.map((technology, index) => {
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
    <article className="house">
      <a href={props.house.url} target="_blank">
        <div className="house__shape">
          <div className="house__shape--image">
            <img className="photo" src={props.house.image} alt={props.house.name} />
          </div>
        </div>
        <h2 className="house__title">{props.house.name}</h2>
        {/* <ul className="house__shape--tech"> {houseTech}</ul> */}
      </a>
    </article>
  );
};

export default House;
