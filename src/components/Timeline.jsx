import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { historics } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const TimelineCard = ({ historic }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#F8B3CC", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #F8B3CC" }}
      date={historic.date}
      iconStyle={{ background: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={historic.icon}
            alt={historic.perfume}
            className="w-full h-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold italic">
          {historic.perfume}
        </h3>
        <p
          className="text-white-200 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {historic.house}
        </p>
      </div>

      <div>
        <p className="text-white text-[12px]">{historic.description}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            Significant Moments in Smell History
          </p>
          <h2 className={`${styles.sectionHeadText}`}>A Perfume Timeline</h2>
        </motion.div>
      </div>

      <div className="mt-20">
        <VerticalTimeline>
          {historics.map((historic, index) => (
            <TimelineCard key={index} historic={historic} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");
