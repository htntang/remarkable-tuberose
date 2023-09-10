import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { notes } from "../constants/constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NoteCard = ({ index, ingredient, icon, description }) => {
  return (
    <>
      <Tilt className="xs:w-[220px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full orange-gradient p-[1px] rounded-full shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-[#F8B3CC] rounded-full py-12 px-12 min-h-[220px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={ingredient} className="w-16 h-16 object contain" />

            <h3 className="text-white text-[20px] font-bold text-center">
              {ingredient}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const FragranceNotes = () => {
  return (
    <>
      <div className="mt-15">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>List of Notes</p>
          <h2 className={`${styles.sectionHeadText}`}>Notes</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
          {notes.map((note, index) => (
            <NoteCard key={note.ingredient} index={index} {...note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(FragranceNotes, "fragrancenotes");
