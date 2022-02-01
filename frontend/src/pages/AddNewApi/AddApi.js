import React from 'react';
import logo from '../../components/Navbar/logo.svg';
import Cards from '../DashboardAPI/cards.js';
import '../DashboardAPI/api.scss';
import img1 from '../DashboardPage/image.svg';
import img2 from '../DashboardPage/image.svg';
import img3 from '../DashboardPage/image.svg';
import img4 from '../DashboardPage/image.svg';
import './AddApi.scss';

const AddApi = () => {
  return (
    <div className="AddApiContainer">
            <div className="backdrop">
                <div className="navbarContainer">
                    <div className="logoContainer">
                        <img src={logo} alt="cuvetteLogo" />
                    </div>
                    
                    <div className="buttons">
                        <div className="buttonContainer">
                            <button className="NewApi">+New API</button>
                        </div>

                        <div className="buttonContainer DbLoginBtn">
                            <button className="MyAccount">My Account</button>
                        </div>  

                        <div className="buttonContainer DbLoginBtn">
                            <button className="MyApi">My APIs</button>
                        </div>
                    </div>                              
                </div>  

                <div className="apiContainer">
            
                    <div className="apiHeading">
                        <h2>Your uploaded APIs</h2>
                    </div>

                    <div className="cardsContainer">
                        <Cards img={img1} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                        <Cards img={img2} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                        <Cards img={img3} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                        <Cards img={img4} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                    </div>        
                </div>
            </div>

            <div className="popup">
                <h2>Ayushi</h2>
            </div>
    </div>
  );
};

export default AddApi;
