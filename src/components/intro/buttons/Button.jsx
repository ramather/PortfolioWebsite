import { motion } from "framer-motion";

const Button = () => {
    return (
        <div>
            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
                About me
            </motion.button>
        </div>
    )
}

export default Button