import React from "react";
import "./ContactPhoneEmailPart.scss";
import { images } from "../../constants";

export default function ContactPhoneEmailPart() {
  return (
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:2003.karen.shmavonyan@gmail.com" className="p-text">
          2003.karen.shmavonyan@gmail.com
        </a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel: +(374)-95-72-66-78" className="p-text">
          +(374)-95-72-66-78
        </a>
      </div>
    </div>
  );
}
