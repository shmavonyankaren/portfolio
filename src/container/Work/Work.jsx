import React from "react";
import { useState, useEffect } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { WorkFilter, WorkItem } from "../../componetens";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio </span> <br /> section <span></span>
      </h2>
      <WorkFilter
        handleWorkFilter={handleWorkFilter}
        activeFilter={activeFilter}
      />

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.length !== 0 ? (
          filterWork.map((work, index) => (
            <WorkItem work={work} index={index} />
          ))
        ) : (
          <div className="empty-text-container">
            <h2 className="head-text">Empty</h2>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
