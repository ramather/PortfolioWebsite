import React from "react";
import move from "lodash-move";

import "./mobileCard.scss";
import { motion } from "framer-motion";
import { data } from "./data";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

function MobileCard() {
  const [cards, setCards] = React.useState(data);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="c">
      <h3 className="title">Projects</h3>


      <ul className="container">
        {cards.map((card, index) => {
          const canDrag = index === 0;
          return (
            <motion.li
              className="c-card"
              style={{
                backgroundColor: card.backgroundColor,
                cursor: canDrag ? "grab" : "auto",
              }}

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
            ></motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileCard;
