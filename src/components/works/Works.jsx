import "./works.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Cards from "./cards";


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
