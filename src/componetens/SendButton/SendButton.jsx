import React from "react";
import "./SendButton.scss";

export default function SendButton({ loading, handleSubmit }) {
  return (
    <button type="button" className="p-text send-button" onClick={handleSubmit}>
      {loading ? "Sending" : "Send Message"}
    </button>
  );
}
