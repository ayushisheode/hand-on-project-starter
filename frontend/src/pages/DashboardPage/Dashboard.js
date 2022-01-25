import React from 'react';
import './Dashboard.scss';
import img from './image.svg';
import rect from './rect.svg';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboardContainer'>
          
          <div className="purpleRect">
              <img className="purpleBG" src={rect} alt='Purple Rectangle' />
            <div className='imageContainer'>
                <img src={img}  alt='image' />
            </div>
          </div>

          <div className='headingContainer'>
            <div className='mainHeading'>
                <h1>Background Image Remove</h1>
                <p>100% automatic and free</p>
            </div>

            <div className='dashButtonContainer'>
                <button className='btn'>View App</button>
            </div>
         </div>

      </div>
      </div>
  );
};

export default Dashboard;