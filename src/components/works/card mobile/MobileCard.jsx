import React, { useState, useEffect } from "react";
import move from "lodash-move";

import "./mobileCard.scss";
import { motion, useAnimation } from "framer-motion";
import { data } from "./data";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

function MobileCard() {
  const [cards, setCards] = useState(data);
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
  }, [cards]);

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
                controls
              }}
            ></motion.li>
          );
        })}
      </ul>
      <button onClick={() => moveToEnd(0)}>Next</button>
    </div>
  );
}

export default MobileCard;
