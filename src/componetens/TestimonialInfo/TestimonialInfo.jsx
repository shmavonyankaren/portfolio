import React from "react";
import { urlFor } from "../../client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function TestimonialInfo({
  testimonials,
  currentIndex,
  handleClick,
  test,
}) {
  return (
    <>
      {testimonials?.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test?.imgurl)} alt={test?.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex testimonial-button"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex testimonial-button"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
}
