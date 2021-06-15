import React from 'react';
import '../stylesheets/House.scss';

const House = (props) => {
  const houseTech = props.house.technologies.map((technology, index) => {
    let techColor = '';
    if (technology.includes('react')) {
      techColor = 'react';
      // } else if (technology.includes('fire')) {
      //   techColor = 'fire';
      // } else if (technology.includes('flying')) {
      //   techColor = 'flying';
      // } else if (technology.includes('water')) {
      //   techColor = 'water';
      // } else if (technology.includes('poison')) {
      //   techColor = 'poison';
      // } else {
      //   techColor = 'grass';
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
          <ul className="house__shape--tech"> {houseTech}</ul>
        </div>
        <h2 className="house__title">{props.house.name}</h2>
      </a>
    </article>
  );
};

export default House;
