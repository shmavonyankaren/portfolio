import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../client";

export default function SkillsComp({ skills }) {
  return (
    <motion.div className="app__skills-list">
      {skills
        ? skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill?.bgColor }}
              >
                <img src={urlFor(skill?.icon)} alt={skill?.name} />
              </div>
              <p className="p-text">{skill?.name}</p>
            </motion.div>
          ))
        : null}
    </motion.div>
  );
}
