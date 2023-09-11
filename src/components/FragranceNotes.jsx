import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { notes } from "../constants/constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

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
            <img
              src={icon}
              alt={ingredient}
              className="w-16 h-16 object contain"
            />

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
          <p className={`${styles.sectionSubText}`}>
            Notes in perfumery are descriptors of scents that can be sensed upon
            the application of a perfume.
          </p>
          <h2 className={`${styles.sectionHeadText}`}>Notes</h2>
          <p>
            Perfume notes typically separated into three classes: top/head
            notes, middle/heart notes, and base notes; which denote groups of
            scents which can be sensed with respect to the time after the
            application of a perfume. These notes are created with knowledge of
            the evaporation process and intended use of the perfume. The
            presence of one note may alter the perception of another—for
            instance, the presence of certain base or heart notes will alter the
            scent perceived when the top notes are strongest, and likewise the
            scent of base notes in the dry-down will often be altered depending
            on the smells of the heart notes.
          </p>
        </motion.div>

        <Popover>
          <PopoverHandler>
            <div className="mt-20 flex flex-wrap gap-10">
              {notes.map((note, index) => (
                <NoteCard key={note.ingredient} index={index} {...note} />
              ))}
            </div>
          </PopoverHandler>

          <PopoverContent>
            
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default SectionWrapper(FragranceNotes, "fragrancenotes");
