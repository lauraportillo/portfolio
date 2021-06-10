import React from 'react';
import '../stylesheets/House.scss';

const House = (props) => {
  const houseTech = props.house.technologies.map((technology, index) => {
    return <li key={index}>{technology}</li>;
  });

  return (
    <article>
      <div>
        <div>
          <img src={props.house.image} alt={props.house.name} />
        </div>
        <ul> {houseTech}</ul>
      </div>
      <h2>{props.house.name}</h2>
    </article>
  );
};

export default House;
