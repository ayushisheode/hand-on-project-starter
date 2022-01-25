import React from 'react';
import './Bg.scss';
import logo from '../../components/Navbar/logo.svg';
import img from '../DashboardPage/image.svg';
import square from './square.svg';
import circle from './circle.svg';
import triangle from './triangle.svg';
import arrowLine from './arrowLine.svg';
import arrow from './arrow.svg';


const Bg = () => {
  
  return (
    <div className='BgRemoverContainer'>
        <div className="BgRnavbar">
              <img src={logo} alt="cuvette logo" />
        </div>

        <div className='BgRemoverSection'>
          <div className="BgRemoverLeftSection">
            <div className="BgLeft">
              <h1>Remove image <br /> background</h1>
              <p>100% automatic and free</p>
              <img src={img} alt="image" />
            </div>
          </div> 
          
          <div className="BgRemoverRightSection">
              <div className="upload">
                <div className="gallery">
                  <img className="square" src={square} alt="gallery" />
                  <img className="circle" src={circle} alt="gallery" />
                  <img className="triangle" src={triangle} alt="gallery" />
                </div>
                <p>File should be png or jpg and <br /> less than 5MB</p>
                
                <button className="BgRemoverButton addFileButton" type="submit" name="upload">Upload Image
                  <img className="arrowLine" src={arrowLine} alt="arrow" />
                  <img className="arrow" src={arrow} alt="arrow" />
                </button>

                <p className="dropFile">or drop a file</p>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Bg;