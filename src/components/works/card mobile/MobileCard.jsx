import React from "react";
import "./mobileCard.scss";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";

// import {  useMotionValue, useTransform, useAnimation } from "framer";


const MobileCard = () => {
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
    const opacityValue = useTransform(
        motionValue,
        [-200, -150, 0, 150, 200],
        [0, 1, 1, 1, 0]
      );
      const animControls = useAnimation();

  return (
    <div className="c">
      <h3 className="title">Projects</h3>
      
      <motion.div className="c-card"
       drag="x"
       x={motionValue}
       rotate={rotateValue}
       opacity={opacityValue}
       dragConstraints={{ left: -1000, right: 1000 }}
       onDragEnd={(event, info) => {
         // If the card is dragged only upto 150 on x-axis
         // bring it back to initial position
         if (Math.abs(info.point.x) <= 150) {
           animControls.start({ x: 0 });
         } else {
           // If card is dragged beyond 150
           // make it disappear
           // making use of ternary operator
           animControls.start({ x: info.point.x < 0 ? -200 : 200 });
         }
       }}
      
      >
    
      </motion.div>
     
    </div>
  );
};

export default MobileCard;
