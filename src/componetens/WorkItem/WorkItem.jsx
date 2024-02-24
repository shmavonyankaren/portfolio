import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

export default function WorkItem({ index, work }) {
  return (
    <div className="app__work-item app__flex" key={index}>
      <div className="app__work-img app__flex">
        <img src={urlFor(work?.imgUrl)} alt={work?.name} />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            delayChildren: 0,
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="app__work-content app__flex">
        <h4 className="bold-text">{work.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {work.description}
        </p>
        <div className="app__work-tag app__flex">
          <p className="p-text">{work.tags[0]}</p>
        </div>
      </div>
    </div>
  );
}
