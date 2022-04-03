import React, { Component } from "react";
import Typical from "react-typical";
import Button from "./buttons/Button";
import "./intro.scss";
import ParticleBackground from "./ParticleBackgroud";

const Intro = () => {
  return (
    <div className="i">
      <ParticleBackground></ParticleBackground>

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey!</h2>
          <h1 className="i-name">I'm Ross</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <Typical
                steps={[
                  "Language Lover",
                  1500,
                  "Travel Enthusiast",
                  1500,
                  "Sci-Fi Fanatic",
                  1500,
                ]}
                loop={Infinity}
                wrapper="h3"
              />
            </div>
          </div>

          <div className="i-desc">
            <br />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Intro;
