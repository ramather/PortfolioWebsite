import { motion } from "framer-motion";
import move from "lodash-move";
import React, { useState, useEffect } from "react";
import "./works.scss";

const data = [
  {
    id: "1",
    title: "LinkedUp",
    desc: "liijfkdsa dsakdsa sak jfksanvvjdksa jkak jfjka fjkal hfjlka jfklda jfkla jkclad jfkdla jfkla jfkdla",
    img: "./colors.jpg",
    backgroundColor: "#747474",
  },
  {
    id: "2",
    title: "Macrolator",
    desc: "liijfkdsa dsakdsa sak jfksanvvjdksa jkak jfjka fjkal hfjlka jfklda jfkla jkclad jfkdla jfkla jfkdla",
    img: "./calculatorscreen.jpg",
    backgroundColor: "#36a18b",
  },
  {
    id: "3",
    title: "pokegen",
    desc: "liijfkdsa dsakdsa sak jfksanvvjdksa jkak jfjka fjkal hfjlka jfklda jfkla jkclad jfkdla jfkla jfkdla",
    img: "./pokemon.jpg",
    backgroundColor: "#cda35f",
  },
];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export default function Cards() {
  const [cards, setCards] = React.useState(data);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };
  return (
    <ul className="container">
      {cards.map((card, index) => {
        const canDrag = index === 0;

        return (
          <motion.li
            style={{
              backgroundColor: card.backgroundColor,
              cursor: canDrag ? "grab" : "auto",
            }}
            className="item"
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: data.length - index,
            }}
            drag={canDrag ? "y" : false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            onDragEnd={() => moveToEnd(index)}
          >
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer"></div>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
                <span>Technology used</span>
              </div>
            </div>
            <div className="right">
              <img src={card.img} />
            </div>
          </motion.li>
        );
      })}
      ;
    </ul>
  );
}
