import "./footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h1>CONTACT ME</h1>
        <form action="mailto:ramather96@gmail.com" method="get" target="_blank">

        <button href>Let's talk</button>
        </form>
      </div>
      <div className="links">
        <div className="technologies">
          <motion.a
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/ross-mather/"
          rel="noopener noreferrer" target="_blank"
          >
            <i id="icon" class="devicon-linkedin-plain"></i>
          </motion.a>
          <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
          rel="noopener noreferrer" target="_blank" href="https://www.github.com/ramather">
            <i  id="icon" class="devicon-github-original"></i>
          </motion.a>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Footer;
