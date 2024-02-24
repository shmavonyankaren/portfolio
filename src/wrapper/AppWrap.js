import React from "react";
import { NavigationDots } from "../componetens";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div className={`app__container ${classNames}`} id={idName}>
        <div className="app__wrapper app__flex ">
          <Component />

          <div className="copyright">
            <p className="app_wrapper_text">@2023 Karen</p>
            <p className="app_wrapper_text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
