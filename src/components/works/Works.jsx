import "./works.scss";
import React, { useState, useEffect } from "react";
import {  isMobile } from 'react-device-detect';

import Cards from "./cards/cards";
import MobileCard from "./card mobile/MobileCard";


export default function Works() {

  if(isMobile) return <MobileCard/>
  

  return (
    <div className="works" id="works">
      <h1 className="head">Projects</h1>
      <h4 className="headDesc">Swipe up or down</h4>

      <div className="slider">
        <Cards />
      </div>
    </div>
  );
}
