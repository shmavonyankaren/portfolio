import React from "react";

export default function TextInput({
  type,
  placeholder,
  value,
  handleChangeInput,
  name,
}) {
  return (
    <div className="app__flex">
      <input
        className="p-text"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChangeInput}
      />
    </div>
  );
}
