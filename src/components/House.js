import React from 'react';
import '../stylesheets/House.scss';

const House = (props) => {
  const houseTech = props.house.technologies.map((technology, index) => {
    return <li key={index}>{technology}</li>;
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
