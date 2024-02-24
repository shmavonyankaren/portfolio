import React from "react";
import { motion } from "framer-motion";
import ReactTolltip from "react-tooltip";

export default function Experiences({ experiences }) {
  return (
    <motion.div className="app__skills-exp">
      {experiences?.map((experience) => (
        <motion.div className="app__skills-exp-year" key={experience.year}>
          <div className="app__skills-exp-year">
            <p className="bold-text">{experience.year}</p>
          </div>
          <motion.div className="app__skills-exp-works">
            {experience.works.map((work) => (
              <React.Fragment key={work.name}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
                <ReactTolltip
                  id={work.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {work.desc}
                </ReactTolltip>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
