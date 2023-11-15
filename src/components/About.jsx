import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="mt-15">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Content Creator | Full Stack Developer | Marketing Strategist
        </p>
        <h2 className={`${styles.sectionHeadText}`}>About Me</h2>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
