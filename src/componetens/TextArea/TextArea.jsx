import React from "react";

export default function TextArea({ message, handleChangeInput }) {
  return (
    <div>
      <textarea
        className="p-text"
        placeholder="Your Message"
        value={message}
        name={"message"}
        onChange={handleChangeInput}
      />
    </div>
  );
}
