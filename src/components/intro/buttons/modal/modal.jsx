import {motion} from "framer-motion"
import Backdrop from "../backdrop/backdrop"

const Modal = ({handleClose, text}) => {
    return (
        <Backdrop>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
            >

            </motion.div>
        </Backdrop>
    )
}

export default Modal;