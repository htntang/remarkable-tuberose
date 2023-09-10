import { styles } from "../styles";
import { brands } from "../constants/constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const BrandList = ({ index, house }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.75)} className="">
      <h3 className="text-white text-[20px] font-bold text-center">{house}</h3>
    </motion.div>
  );
};

const Brands = () => {
  return (
    <>
      <div className="mt-15">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>List of Brands</p>
          <h2 className={`${styles.sectionHeadText}`}>Brands</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
          {brands.map((house) => (
            <BrandList key={house} {...house} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Brands, "brands");
