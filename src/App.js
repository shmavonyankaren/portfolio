import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./componetens";
import "./App.scss";
import StarsBackground from "./componetens/StarsBackground/StarsBackground";

const App = () => {
  return (
    <div className="app-container">
      <div className="star-container">
        <StarsBackground />
      </div>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default App;
