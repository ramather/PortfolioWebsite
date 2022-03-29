import "./works.scss";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Works() {
  const [indx, setIndx] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    console.log(`${indx} use effect`)
    controls.start({
      rotate: indx * 360,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    });
  }, [indx, controls]);

  const data = [
    {
      id: "1",
      title: "LinkedUp",
      desc: "liijfkdsa dsakdsa sak jfksanvvjdksa jkak jfjka fjkal hfjlka jfklda jfkla jkclad jfkdla jfkla jfkdla",
      img: "./colors.jpg",
    },
    {
      id: "2",
      title: "Macrolator",
      desc: "liijfkdsa dsakdsa sak jfksanvvjdksa jkak jfjka fjkal hfjlka jfklda jfkla jkclad jfkdla jfkla jfkdla",
      img: "./calculatorscreen.jpg",
    },
    {
      id: "3",
      title: "pokegen",
      desc: "liijfkdsa dsakdsa sak jfksanvvjdksa jkak jfjka fjkal hfjlka jfklda jfkla jkclad jfkdla jfkla jfkdla",
      img: "./pokemon.jpg",
    },
  ];
  return (
    <div className="works" id="works">
      <h1 className="head">Projects</h1>
      <div className="slider">
        <div className="container">
          <motion.div
            animate={controls}
            className="item"
          >
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  {/* <img src="./me.jpg" alt=""></img> */}
                </div>
                <h2>{data[indx].title}</h2>
                <p>{data[indx].desc}</p>
                <span>Technology used</span>
              </div>
            </div>
            <div className="right">
              <img src={data[indx].img} />
            </div>
          </motion.div>
        </div>
      </div>
      <img
        onClick={() => {
          indx > 0 ? setIndx(indx - 1) : setIndx(data.length - 1);
          console.log(indx);
        }}
        src="arrow.png"
        alt="arrow"
        className="arrow left"
      />
      <img
        onClick={() => {
          console.log(indx)
          indx === data.length - 1 ? setIndx(0) : setIndx(indx + 1);
        }}
        src="arrow.png"
        alt="arrow"
        className="arrow right"
      />
    </div>
  );
}
