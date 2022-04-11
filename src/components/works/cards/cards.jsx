import { motion } from "framer-motion";
import move from "lodash-move";
import React from "react";
import "./cards.scss";
import { data } from "./data";

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
              // cursor: canDrag ? "grab" : "auto",
            }}
            className="item"
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
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
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
                <span>Technology used</span>
                <div className="technologies">
                  {card.technologies.map((tech) => {
                    return <i className={tech}></i>;
                  })}
                </div>
              </div>
            </div>
            <div className="right">
              <img src={card.img} />
              <div className="buttons">
                <form action={card.git} method="get" target="_blank">
                  <button type="submit" className="bn5">
                    {" "}
                    Git Repo{" "}
                  </button>
                </form>
                <form action={card.link} method="get" target="_blank">
                  <button className="bn5"> Link to Site </button>
                </form>
              </div>
            </div>
          </motion.li>
        );
      })}
      ;
    </ul>
  );
}
