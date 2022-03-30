import "./works.scss";
import React, { useState, useEffect } from "react";

import Cards from "./cards/cards";


export default function Works() {
  

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
