import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { historics } from "../constants/constants";
// import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const TimelineCard = ({ historic }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#78a537", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #78a537" }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{historic.house}</h3>
        <p
          className="text-white-200 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {historic.perfume}
        </p>
      </div>

      <ul className="mt-5">
        {/* {historic.points.map((point, index) => (
            <li>

            </li>
        ))} */}
      </ul>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Significant Moments in Smell History</p>
        <h2 className={`${styles.sectionHeadText}`}>Perfume History</h2>
      </motion.div>

      <div className="mt-20">
        <VerticalTimeline>
            {historics.map((historic,index) => (
                <TimelineCard key={index} historic={historics} />
            ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
