import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../client";

export default function TestimonialsImage({ brands }) {
  return (
    <div className="app__testimonial-brands app__flex">
      {brands.map((brand) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
          key={brand._id}
        >
          <img src={urlFor(brand.imgUrl)} alt={brand.name} />
        </motion.div>
      ))}
    </div>
  );
}
