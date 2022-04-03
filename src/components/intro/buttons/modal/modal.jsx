import { motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";
import "./modal.css";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        <div className="card">
          <p>
            {" "}
            I am a Software Engineer from Cincinnati, Ohio. I love all things
            related to technology. Lately I have been immersing myself in the
            world of Javascript. When I am not at my computer I am usually
            watching horror movies or running.
          </p>
          <button onClick={handleClose}>Close</button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
