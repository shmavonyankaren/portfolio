import React from "react";
import { useState, useEffect } from "react";
import "./Skills.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { Experiences, SkillsComp } from "../../componetens";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skilla & Experience & Education</h2>

      <div className="app__skills-container">
        <SkillsComp skills={skills} />
        <Experiences experiences={experiences} />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
