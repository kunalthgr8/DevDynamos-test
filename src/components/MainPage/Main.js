import React from 'react';
import "./Main.css";
import OpenLake from "../img/openlakeLogo.png";
import Wave from 'react-wavify';

const Main = () => {
  return (
    <div className="main">
      <div className='main-moto'>Connecting Students to the world of open source development</div>
      <div className="image-container">
        <img src={OpenLake} alt='OpenLake' className="image" />
        <Wave fill="url(#gradient)"
          paused={false}
          options={{
            height: 5,
            amplitude: 70,
            speed: 0.18,
            points: 5
          }}
          className='wave'
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#64B5F6" />
              <stop offset="90%" stopColor="#B2DDFF" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
};

export default Main;

