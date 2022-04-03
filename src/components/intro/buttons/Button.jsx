import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./modal/modal";

const Button = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        About me
      </motion.button>

      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}

    </div>
  );
};

export default Button;
