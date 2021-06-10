import React from 'react';
import '../stylesheets/House.scss';

const House = (props) => {
  return (
    <article>
      <div>
        <div>
          <img src={props.house.image} alt={props.house.name} />
        </div>
        <ul></ul>
      </div>
      <h2>{props.house.name}</h2>
    </article>
  );
};

export default House;
