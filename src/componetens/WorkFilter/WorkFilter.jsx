import React from "react";

export default function WorkFilter({ handleWorkFilter, activeFilter }) {
  return (
    <div className="app__work-filter">
      {["Next.js", "Web App", "Mobile App", "React JS", "All"].map(
        (item, index) => (
          <div
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        )
      )}
    </div>
  );
}
