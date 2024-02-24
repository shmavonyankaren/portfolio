import React from "react";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import {
  GreatingComp,
  MainImageComp,
  MainSecondImageComp,
} from "../../componetens";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <GreatingComp />
      <MainImageComp />
      <MainSecondImageComp />
    </div>
  );
};

export default AppWrap(Header, "home");
