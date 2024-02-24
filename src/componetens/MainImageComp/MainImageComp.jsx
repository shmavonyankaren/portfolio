import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

export default function MainImageComp() {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profilegoodone} alt="imag" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        className="overlay_circle"
      />
    </motion.div>
  );
}
