import React from 'react';
import './cards.scss';


const cards = ({img, text1, text2}) => {
  return (
      <div className="cardContainer">
        <div className="card">
            <div className="cardImg">
                <img src={img} alt="image" />
            </div>
            <div className="cardContent">
                <h3>{text1}</h3>
                <p>{text2}</p>
            </div>
        </div>
      </div>
  );
};

export default cards;