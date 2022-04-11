import React, { useState, useEffect } from "react";
import move from "lodash-move";

import "./mobileCard.scss";
import { motion, useAnimation } from "framer-motion";
import { data } from "./data";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

function MobileCard() {
  const [cards, setCards] = useState(data);
  const [wobble, setWobble] = useState(false);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }));
  }, []);

  return (
    <div className="c">
      <h3 className="title">Projects</h3>

      <ul className="container">
        {cards.map((card, index) => {
          return (
            <motion.li
              className="c-card"
              style={{
                backgroundColor: card.backgroundColor,
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              <h1>{card.title}</h1>
              <img src={card.img}></img>
              <h4>Technology used</h4>
              <div className="tech">
                {card.technologies.map((tech) => {
                  return <i className={tech}></i>;
                })}
              </div>
              <p>{card.desc}</p>

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
            </motion.li>
          );
        })}
      </ul>
      <button onClick={() => moveToEnd(0)}>Next</button>
    </div>
  );
}

export default MobileCard;
