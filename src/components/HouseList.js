import React from 'react';
import House from './House';
import '../stylesheets/HouseList.scss';

const HouseList = (props) => {
  const renderHouse = props.houses.map((house) => {
    return (
      <li key={house.id.toString()}>
        <House house={house} />
      </li>
    );
  });

  return (
    <div className="">
      <ul className="houseList">{renderHouse}</ul>
    </div>
  );
};

export default HouseList;
