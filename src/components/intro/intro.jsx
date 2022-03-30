import React, { Component } from "react";
import Typical from "react-typical";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey! My name is</h2>
          <h1 className="i-name">Ross Mather</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
             
              <Typical
                steps={["Language Lover", 1500, "Travel Enthusiast", 1500, "Sci-Fi Fanatic", 1500, ]}
                loop={Infinity}
                wrapper="h3"
              />
            </div>
          </div>
          <div className="i-desc">
            I am a Software Engineer from Cincinnati, Ohio. I love all things
            related to technology.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-shape"></div>
      </div>
    </div>
  );
};

export default Intro;
